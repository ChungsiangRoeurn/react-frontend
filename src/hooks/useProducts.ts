import { useEffect, useState } from "react";
import { getProduct } from "../api/product.api";
import type { Products } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ====================================================================
  // =====> Using JS native fetch

  // const getData = async (): Promise<void> => {
  //   try {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     if (!res.ok) throw new Error("Failed to fetch products");

  //     const data: Products[] = await res.json();
  //     setProducts(data);
  //   } catch (err) {
  //     setError((err as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  // =====================================================================

  // =====> Using Axios instance

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct();
        // console.log("See fetched data:", data);

        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return {
    products,
    loading,
    error,
  };
}
