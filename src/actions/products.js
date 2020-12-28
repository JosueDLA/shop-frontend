import axios from "axios";
import { GET_PRODUCTS } from "./types";
import { DELETE_PRODUCT } from "./types";

// GET PRODUCTS
export const getProducts = () => (dispatch) => {
  axios
    .get("http://localhost:8000/product/")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error en API:", err));
};

// DELETE PRODUCT
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8000/product/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    })
    .catch((err) => console.log("Error en API:", err));
};
