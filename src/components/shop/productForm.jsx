import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    name: "",
    price: "",
    stock: "",
    user: "",
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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

export default ProductForm;
