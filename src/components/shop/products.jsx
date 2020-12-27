import React from "react";
import ProductsCRUD from "./productsCRUD";
import ProductsList from "./productsList";

const Products = (props) => {
  return (
    <React.Fragment>
      <ProductsCRUD />
      <ProductsList />
    </React.Fragment>
  );
};

export default Products;
