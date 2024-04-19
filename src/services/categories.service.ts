import { Product, Category } from "../schemas/products.schema";
import axios from "axios";
import products2 from "../../mockData/product";

interface Result {
  data: string[];
}

export async function getData(): Promise<Result> {
  try {
    // const products = (
    //   await axios.get("https://apimocha.com/test-ecomm/catalog")
    // ).data as Product[];

    // const categories: Category[] = products.reduce(
    const categories: Category[] = products2.reduce(
      (categories: Category[], product: Product): Category[] => {
        return (categories = [...categories, ...product.categories]);
      },
      [],
    );
    const mapCategories = new Set(categories.map((category) => category.name));
    const sortedCategories = Array.from(mapCategories.keys()).sort((a, b) =>
      a.localeCompare(b),
    );
    return { data: sortedCategories };
  } catch (err) {
    throw new Error("something wrong happened");
  }
}

export const CategoriesServices = {
  getData,
};
