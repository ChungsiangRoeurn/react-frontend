import type { Products } from "../types/product";
import api from "./client";

export const getProduct = async (): Promise<Products[]> => {
  const res = await api.get("/products");
  // console.log("API response:", res.data)
  return res.data;
};
