import React from "react";
import ProductForm from "./productForm";
import ProductsList from "./productsList";

const Products = (props) => {
  return (
    <React.Fragment>
      <ProductForm />
      <ProductsList />
    </React.Fragment>
  );
};

export default Products;
