import axios from "axios";

export function getProducts(num) {
  return axios
    .get(`https://fakestoreapi.com/products?limit=30`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
}

export function getProduct(id) {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
}

export function getRecommended(category) {
  return axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
}
