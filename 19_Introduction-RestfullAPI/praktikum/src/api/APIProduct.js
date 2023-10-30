import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIProduct = {
  getProducts: async () => {},

  getProductById: async (id) => {
    try {
      const result = await axiosInstance.get(`/products/${id}`);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
};
