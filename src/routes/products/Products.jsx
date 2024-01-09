import React from "react";
import Cardcontainergrid from "../../components/Cardcontainergrid";
import Footer from "../../components/Footer";

export default function Products(props) {
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        All Products
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Here's a list of all our products. We have a wide range of products.
      </p>
      <Cardcontainergrid products={props.products} />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Woah! You just scrolled through our entire collection.
      </h1>
      <p className="text-center text-neutral-400 text-md w-9/12 mx-auto mb-10 mt-3">
        If you liked any of our products, feel free to{" "}
        <a href="/contact" className="underline">
          contact us
        </a>{" "}
        or check out our{" "}
        <a href="/faq" className="underline">
          FAQ
        </a>{" "}
        page.
      </p>

      <Footer />
    </div>
  );
}
