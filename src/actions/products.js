import axios from "axios";
import { GET_PRODUCTS } from "./types";
import { DELETE_PRODUCT } from "./types";
import { ADD_PRODUCT } from "./types";

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
    .catch((err) => console.log("Error GET:", err));
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
    .catch((err) => console.log("Error DELETE:", err));
};

// ADD PRODUCT
export const addProduct = (product) => (dispatch) => {
  axios
    .post("http://localhost:8000/product/", product)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error POST:", err));
};
