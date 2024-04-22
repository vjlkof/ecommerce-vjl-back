import {
  Product,
  Category,
  FilterSearchField,
} from "../schemas/products.schema.js";
import config from "../config/config.js";

export default function getFilteredProducts(
  filterSearchQuery: FilterSearchField,
  products: Product[],
) {
  function sortProducts(
    products: Product[],
    sortValue: string | undefined,
  ): Product[] {
    if (sortValue === "name-desc")
      return products.sort((a: Product, b: Product) =>
        b.name.localeCompare(a.name),
      );
    if (sortValue === "price-asc")
      return products.sort(
        (a: Product, b: Product) =>
          a.price_range.maximum_price.final_price.value -
          b.price_range.maximum_price.final_price.value,
      );
    if (sortValue === "price-desc")
      return products.sort(
        (a: Product, b: Product) =>
          b.price_range.maximum_price.final_price.value -
          a.price_range.maximum_price.final_price.value,
      );
    return products.sort((a: Product, b: Product) =>
      a.name.localeCompare(b.name),
    );
  }

  const filteredProducts = products.filter((product: Product) => {
    if ("q" in filterSearchQuery && !!filterSearchQuery.q) {
      if (
        !product.name
          .toLowerCase()
          .includes(filterSearchQuery.q.toLowerCase()) &&
        !product.contenido
          .toLowerCase()
          .includes(filterSearchQuery.q.toLowerCase()) &&
        !product.description.html
          .toLowerCase()
          .includes(filterSearchQuery.q.toLowerCase())
      )
        return false;
    }
    if ("num_min" in filterSearchQuery && !!filterSearchQuery.num_min) {
      if (
        product.price_range.maximum_price.final_price.value <
        Number(filterSearchQuery.num_min)
      )
        return false;
    }
    if ("num_max" in filterSearchQuery && !!filterSearchQuery.num_max) {
      if (
        product.price_range.maximum_price.final_price.value >
        Number(filterSearchQuery.num_max)
      )
        return false;
    }

    if ("category" in filterSearchQuery && !!filterSearchQuery.category) {
      const searchCategories = filterSearchQuery.category
        .split("-")
        .join(" ")
        .split(",");

      return searchCategories.every((searchCategory: string) => {
        return product.categories.some(
          (category: Category) =>
            category.name.toLowerCase() === searchCategory.toLowerCase(),
        );
      });
    }
    return true;
  });
  const sortedProducts = sortProducts(
    filteredProducts,
    filterSearchQuery?.sort,
  );

  if (!("page" in filterSearchQuery)) {
    filterSearchQuery.page = "1";
  }

  const paginatedProducts = sortedProducts.slice(
    Number(config.LIMIT) * (Number(filterSearchQuery.page) - 1),
    Number(config.LIMIT) * Number(filterSearchQuery.page),
  );

  return {
    resultQtty: sortedProducts.length,
    limit: config.LIMIT as number,
    current: Number(filterSearchQuery.page),
    next:
      sortedProducts.length -
        Number(config.LIMIT) * Number(filterSearchQuery.page) -
        1 >
      0
        ? Number(filterSearchQuery.page) + 1
        : null,
    previous:
      Number(filterSearchQuery.page) === 1
        ? null
        : Number(filterSearchQuery.page) - 1,
    products: paginatedProducts,
  };
}
