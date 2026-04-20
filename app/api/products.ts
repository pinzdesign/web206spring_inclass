import { products } from "@/dummy-data/products";
import { Product } from "../../types/product";

// simulate backend
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};