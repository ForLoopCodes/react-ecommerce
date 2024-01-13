import React, { useState } from "react";
import Cardcontainer from "../../components/Cardcontainer";
import Footer from "../../components/Footer";

export default function Product(props) {
  let currentid = window.location.pathname.split("/")[2] || 0;
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div>
      <div className="mt-24 w-full z-10 flex justify-center pt-24 items-start">
        <div className="h-96 flex">
          <div className="flex flex-col gap-5 mt-1">
            <div
              className="w-20 h-20 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(" + props.products[currentid].allImages[0] + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setCurrentImg(0);
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>
            <div
              className="w-20 h-20 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(" + props.products[currentid].allImages[1] + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setCurrentImg(1);
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>
            <div
              className="w-20 h-20 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(" + props.products[currentid].allImages[2] + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setCurrentImg(2);
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>
            <div
              className="w-20 h-20 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage:
                  "url(" + props.products[currentid].allImages[3] + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                setCurrentImg(3);
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
                }}
              ></div>
            </div>
          </div>
          <div
            className="w-96 h-96 rounded-xl relative overflow-hidden ml-8"
            style={{
              backgroundImage:
                `url(` + props.products[currentid].allImages[currentImg] + `)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
              }}
            ></div>
          </div>
        </div>
        <div className="ml-14 w-4/12">
          <h1 className="text-4xl font-bold text-neutral-100">
            {props.products[currentid].name}
          </h1>
          <div className="flex w-full items-end mt-5">
            <p className="text-lg font-normal text-neutral-500 line-through mr-5">
              ₹{props.products[currentid].price}
            </p>
            <p className="text-2xl font-bold text-neutral-300">
              ₹{props.products[currentid].discountPrice}
            </p>
          </div>
          <div className="flex justify-start items-center gap-0 mt-5">
            <div
              className="flex justify-center w-1/2 mr-5 items-center h-10 rounded-xl px-10 py-6 pl-8 bg-neutral-600 bg-opacity-60 border border-neutral-800 hover:border-red-900 hover:bg-opacity-80"
              onClick={() => {
                if (
                  props.cartData.filter((product) => {
                    return product.id === props.products[currentid].id;
                  }).length > 0
                ) {
                  props.setCartData(
                    props.cartData.map((product) => {
                      if (product.id === props.products[currentid].id) {
                        return {
                          id: product.id,
                          quantity: product.quantity + 1,
                        };
                      }
                      return product;
                    })
                  );
                } else {
                  props.setCartData([
                    ...props.cartData,
                    {
                      id: props.products[currentid].id,
                      quantity: 1,
                    },
                  ]);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div>
                {props.cartData.filter((product) => {
                  return product.id === props.products[currentid].id;
                }).length > 0
                  ? props.cartData.filter((product) => {
                      return product.id === props.products[currentid].id;
                    })[0].quantity
                  : "Add to cart"}
              </div>
            </div>
            <div
              className="flex justify-center w-1/2 items-center h-10 rounded-xl px-10 py-6 pl-8 bg-red-600 bg-opacity-100 border border-neutral-800 hover:border-red-900 hover:bg-opacity-80"
              onClick={() => {
                window.location.href = "/checkout";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div>Buy Now</div>
            </div>
          </div>
          <p className="w-full text-md text-neutral-400 mt-6">
            {props.products[currentid].description}
          </p>
          <ul className="w-full flex flex-col gap-2 mt-6">
            <li>
              <span className="text-neutral-400">Category:</span>{" "}
              <span className="text-neutral-300">
                {props.products[currentid].category}
              </span>
            </li>
            <li>
              <span className="text-neutral-400">Color:</span>{" "}
              <span className="text-neutral-300">
                {props.products[currentid].color}
              </span>
            </li>
            <li>
              <span className="text-neutral-400">Sizes:</span>{" "}
              <span className="text-neutral-300">
                {props.products[currentid].sizes.map((size) => {
                  return size + " ";
                })}
              </span>
            </li>
          </ul>
          <p className="w-full text-md text-neutral-400 mt-6">
            {props.products[currentid].description2}
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center mt-14 text-neutral-300">
        Featured Products
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our featured products. We have crafted these products with love
        & care.
      </p>
      <Cardcontainer
        products={props.products.filter((product) => {
          return product.bestSeller === true;
        })}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Searching for more?
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-14 mt-3">
        go to our{" "}
        <a href="/search" className="underline">
          search page
        </a>{" "}
        to find more products.
      </p>
      <Footer />
    </div>
  );
}
