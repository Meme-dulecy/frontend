import axios from "axios";

export const serviceClient = axios.create({
  baseURL: "http://18.116.27.58:5000",
});
