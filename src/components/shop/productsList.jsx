import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";

class ProductsList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return <h1>Products List</h1>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(ProductsList);
