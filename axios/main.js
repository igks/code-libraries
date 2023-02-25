import { apiOne } from "./api.js";

async function getRecords() {
  const data = await apiOne.get("/posts");
  console.log(data);
}

getRecords();
