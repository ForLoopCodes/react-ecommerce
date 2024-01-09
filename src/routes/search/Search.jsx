import React from "react";
import Cardcontainergrid from "../../components/Cardcontainergrid";
import Footer from "../../components/Footer";

export default function Search(props) {
  console.log("hello" + props.query);
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        {props.query === undefined || props.query === ""
          ? "All Products"
          : `Search results for "${props.query}"`}
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        {props.query === undefined || props.query === ""
          ? "Here's a list of all our products. We have a wide range of products."
          : `Here's a list of all our products that match your search query.`}
      </p>
      <Cardcontainergrid
        products={props.products.filter((product) => {
          return (
            product.name.toLowerCase().includes(props.query.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(props.query.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(props.query.toLowerCase()) ||
            product.color
              .toLowerCase()
              .includes(
                props.query.toLowerCase() ||
                  product.searchQueries.includes(props.query.toLowerCase())
              )
          );
        })}
      />
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
