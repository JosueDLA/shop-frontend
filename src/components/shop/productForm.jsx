import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../actions/products";

class ProductForm extends Component {
  state = {
    name: "",
    price: "",
    stock: "",
    user: "",
  };

  static propTypes = {
    addProduct: PropTypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, price, stock, user } = this.state;
    const product = { name, price, stock, user };
    this.props.addProduct(product);
  };

  render() {
    const { name, price, stock, user } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              className="form-control"
              type="number"
              name="stock"
              onChange={this.onChange}
              value={stock}
            />
          </div>
          <div className="form-group">
            <label htmlFor="User">User</label>
            <input
              className="form-control"
              type="text"
              name="user"
              onChange={this.onChange}
              value={user}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addProduct })(ProductForm);
