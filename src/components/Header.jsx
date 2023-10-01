import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="select-none w-screen bg-opacity-50 fixed top-0 left-0 z-50 h-16 bg-neutral-950 text-white flex justify-around items-center backdrop-filter backdrop-blur-xl">
        <div className="flex items-center">
          <a href="/" className="m-5">
            <img
              alt="logo"
              src="https://yt3.googleusercontent.com/7iv9P4fvqmwNw8Zp7NrkyIamnVao-06ykJPQssrmKyzWb4mmYCR4YeqHob8bvUp7vlQ3vrhlbg=s176-c-k-c0x00ffffff-no-rj"
              className="w-8 rounded"
            />
          </a>
          <div className="m-4 w-0.5 h-6 bg-red-700 rounded"></div>
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover"
            }
          >
            <span className="">Home</span>
          </a>
          <a
            href="/products"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover hidden lg:block"
            }
          >
            <span className="">Products</span>
          </a>
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover hidden lg:block"
            }
          >
            <span className="">Contact</span>
          </a>
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover hidden lg:block"
            }
          >
            <span className="">About</span>
          </a>
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover sm:hidden block"
            }
          >
            <span className="">Search</span>
          </a>
          <div className="m-4 w-0.5 h-6 bg-red-700 rounded hidden sm:block"></div>
          <input
            type="search"
            placeholder="Search for products..."
            className="header-input m-4 w-60 h-5 text-sm font-medium text-neutral-400 rounded-lg bg-neutral-800 p-4 border border-red-700 focus:outline-none focus:border-neutral-400 hidden sm:block md:w-80"
          />
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover sm:block hidden"
            }
          >
            <span className="">Account</span>
          </a>
          <a
            href="/"
            className={
              "m-4 text-neutral-400 text-sm font-medium hover:text-red-700 underline-on-hover"
            }
          >
            <span className="">Cart</span>
          </a>
        </div>
      </div>
      <div className="h-96 w-full z-0 fixed top-0 left-0 bg-gradient-to-b from-neutral-950 to-neutral-900"></div>
    </>
  );
}
