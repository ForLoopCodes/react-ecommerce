import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import Products from "./products/Products";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import Search from "./search/Search";
import Contact from "./contact/Contact";
import returnProducts from "./returnproducts";
import Footer from "../components/Footer";

export default function Main(props) {
  const route = window.location.pathname.split("/")[1];
  const products = returnProducts();
  return (
    <div>
      <Header />
      {route === "" ? (
        <Home products={products} />
      ) : route === "products" ? (
        <Products products={products} />
      ) : route === "contact" ? (
        <Contact products={products} />
      ) : route === "product" ? (
        <Product products={products} />
      ) : route === "cart" ? (
        <Cart products={products} />
      ) : route === "search" ? (
        <Search
          products={products}
          query={window.location.pathname.split("/")[2].split("%20").join(" ")}
        />
      ) : (
        <div className="absolute top-20 h-screen w-full z-10">
          <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
            Oops! Page not found.
          </h1>
          <ul className="text-neutral-400 text-sm w-5/12 mx-auto mb-10 mt-3">
            <li>
              <p>
                {" "}
                We're still under construction, so this page may not exist yet.
                Further in the future, this page may be added to the site.{" "}
                <a href="/" className="hover:text-neutral-100 underline">
                  Go back to the home page.
                </a>
              </p>
              <br />
            </li>
          </ul>
          <Footer />
        </div>
      )}
    </div>
  );
}
