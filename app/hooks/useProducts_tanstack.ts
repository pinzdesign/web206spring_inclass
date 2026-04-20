"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { Product } from "../../types/product";

export function useProducts_tanstack() {
  const query = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
}