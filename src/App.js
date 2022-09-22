import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [showProduct, setShowProduct] = useState({show: false, value: ''})
  const handleUrl = (data) => {
    switch (data) {
      case "all":
        return "https://fakestoreapi.com/products";
      case "electronics":
        return "https://fakestoreapi.com/products/category/electronics";
      case "jewelery":
        return "https://fakestoreapi.com/products/category/jewelery";
      case "men's clothing":
        return `https://fakestoreapi.com/products/category/men's clothing`;
      case "women's clothing":
        return `https://fakestoreapi.com/products/category/women's clothing`;
    }
  };
  const handleClick = (data) => {
    setUrl(handleUrl(data));
  };
  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <Main url={url} />
      <div className="footer">Online Shop</div>
      {!showProduct.show && <div className="modal" >
        <div className="modal-container"></div>
        </div>}
    </div>
  );
}

export default App;
