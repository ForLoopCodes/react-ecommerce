import React from "react";

export default function Header(props) {
  return (
    <div className="select-none w-screen h-16 bg-neutral-900 text-white flex justify-around items-center">
      <div className="flex items-center">
        <a href="/" className="m-5">
          <img
            alt="logo"
            src="https://yt3.googleusercontent.com/7iv9P4fvqmwNw8Zp7NrkyIamnVao-06ykJPQssrmKyzWb4mmYCR4YeqHob8bvUp7vlQ3vrhlbg=s176-c-k-c0x00ffffff-no-rj"
            className="w-8 rounded"
          />
        </a>
        <div className="m-4 w-0.5 h-6 bg-neutral-600"></div>
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover"
          }
        >
          <span className="">Home</span>
        </a>
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover hidden md:block"
          }
        >
          <span className="">Products</span>
        </a>
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover hidden md:block"
          }
        >
          <span className="">Contact</span>
        </a>
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover hidden md:block"
          }
        >
          <span className="">About</span>
        </a>
        <div className="m-4 w-0.5 h-6 bg-neutral-600"></div>
        <input
          type="search"
          placeholder="Search for products..."
          className="header-input m-4 w-80 h-5 text-sm font-medium text-neutral-400 rounded-lg bg-neutral-800 p-4 border border-neutral-600 focus:outline-none focus:border-neutral-400 hidden lg:block"
        />
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover"
          }
        >
          <span className="">Account</span>
        </a>
        <a
          href="/"
          className={
            "m-4 opacity-60 text-sm font-medium hover:opacity-100 underline-on-hover"
          }
        >
          <span className="">Cart</span>
        </a>
      </div>
    </div>
  );
}
