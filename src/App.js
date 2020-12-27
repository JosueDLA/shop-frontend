import "./App.css";
import React from "react";
import Navbar from "./components/layout/navbar";
import Products from "./components/shop/products";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Products />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
