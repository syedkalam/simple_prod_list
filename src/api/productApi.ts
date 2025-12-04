import { API_BASE_URL } from "../constants/baseUrl";

export const fetchProductsApi = async (skip: number) => {
  const url = `${API_BASE_URL}/products?limit=10&skip=${skip}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
