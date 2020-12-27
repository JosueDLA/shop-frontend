import axios from "axios";
import { GET_PRODUCTS } from "./types";

// GET PRODUCTS
export const getProducts = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/product/")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error en API:", err));
};
