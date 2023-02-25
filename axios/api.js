import axios from "../node_modules/axios/lib/axios.js";

export const apiOne = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
