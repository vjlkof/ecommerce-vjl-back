import { z } from "zod";

export interface Category {
  name: string;
}

export interface MediaGallery {
  label: string | null;
  url: string;
}

export interface CategoriesFilterItem {
  title: string;
  path: string;
}

export interface Money {
  currency: string;
  value: number;
}

export interface Product {
  id: number;
  meta_title: string;
  meta_keyword: string;
  meta_description: string | null;
  url_key: string;
  name: string;
  categories: Category[];
  envio_gratis: number;
  contenido: string;
  stock: number;
  descuento_socios?: string;
  thumbnail: { url: string };
  description: { html: string };
  sku: string;
  media_gallery: MediaGallery[];
  price_range: {
    maximum_price: {
      final_price: Money;
      discount: { amount_off: number; percent_off: number };
      fixed_product_taxes?: string[];
      regular_price: Money;
    };
  };
}

export const QuerySchemaGet = z.object({
  q: z.string().optional(),
  num_min: z.string().optional(),
  num_max: z.string().optional(),
  category: z.string().optional(),
  sort: z.string().optional(),
  page: z.string().optional(),
});

export const usersSchemaGet = z.object({
  query: QuerySchemaGet,
});

export type FilterSearchField = z.infer<typeof QuerySchemaGet>;

export const usersSchemaGetOne = z.object({
  params: z.object({
    id: z.string(),
  }),
});
