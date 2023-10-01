import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import Products from "./products/Products";

export default function Main(props) {
  const route = window.location.pathname.split("/")[1];
  return (
    <div>
      <Header />
      {route === "" ? <Home /> : route === "products" ? <Products /> : null}
    </div>
  );
}
