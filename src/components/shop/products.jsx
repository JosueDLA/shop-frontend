import React from "react";
import ProductsCRUD from "./productsCRUD";
import ProductsList from "./productsList";
import Navbar from "../layout/navbar";

const Products = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <ProductsCRUD />
        <ProductsList />
      </div>
    </React.Fragment>
  );
};

export default Products;
