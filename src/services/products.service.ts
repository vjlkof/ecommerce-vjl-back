import { Product, FilterSearchField } from "../schemas/products.schema.js";
import getFilteredProducts from "../utils/getFilteredProducts.js";
import axios from "axios";
import products2 from "../../mockData/product.js";

interface resultWithPagination {
  resultQtty: number;
  limit: number;
  current: number;
  next: number | null;
  previous: number | null;
  products: Product[];
}

interface Result {
  data: resultWithPagination | Product | string | null;
}

export async function getData(
  filterSearchQuery: FilterSearchField,
): Promise<Result> {
  try {
    // const products = (
    //   await axios.get("https://apimocha.com/test-ecomm/catalog")
    // ).data as Product[];

    const result = getFilteredProducts(filterSearchQuery, products2);
    // const result = getFilteredProducts(filterSearchQuery, products);
    return { data: result };
  } catch (err) {
    throw new Error("Something wrong happened");
  }
}

export async function getOneData(id: number): Promise<Result> {
  try {
    // const products = (
    //   await axios.get("https://apimocha.com/test-ecomm/catalog")
    // ).data as Product[];
    // const productResult = products.find(
    const productResult = products2.find(
      (product: Product) => product.id === id,
    )!;
    return { data: !productResult ? null : productResult };
  } catch (err) {
    throw new Error("Something wrong happened");
  }
}

export const ProductsServices = {
  getData,
  getOneData,
};
