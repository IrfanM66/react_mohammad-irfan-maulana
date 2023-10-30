import axios from "axios";
import { API_URL } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
});

console.log(API_URL);