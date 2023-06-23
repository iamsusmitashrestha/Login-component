import axios, { ResponseType } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (
  url: string,
  params = {},
  responseType = "json" as ResponseType
) => {
  return instance({ url, params, method: "get", responseType })
    .then((res) => res)
    .catch((error) => {
      console.log("error", error);
      throw error?.response?.data;
    });
};
