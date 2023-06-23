import { get } from "./axios";

export const fetchProducts = async () => {
  const { data } = await get("/product/getProducts");
  return data;
};
