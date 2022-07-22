// A mock function to mimic making an async request for data
import axios from "axios";
const url = "http://localhost:3000/products/";

export function fetchData() {
  return new Promise((resolve) =>
    axios(url).then((res) => resolve({ data: res.data }))
  );
}

export const addData = (newProd) => {
  // console.log(newProd);
  return new Promise((resolve) =>
    axios.post(url, newProd).then((res) => resolve(newProd))
  );
};

export const delData = (id) => {
  // console.log(newProd);
  return new Promise((resolve) =>
    axios.delete(url+ id).then((res) => resolve(id))
  );
};
