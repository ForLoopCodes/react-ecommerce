import React from "react";

export default function Cardcontainer(props) {
  return (
    <div className="w-full flex justify-center items-center overflow-x-scroll hide-scrollbar">
      <div className="w-content grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-4 sm:p-8">
        {props.products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${product.image})`,
                backgroundSize: "cover",
                height: "100%",
                backgroundPosition: "center",
              }}
              className="w-52 sm:w-62 md:w-72 h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-80 flex flex-col justify-center items-center bg-neutral-200 rounded-2xl p-3"
            >
              <div className="flex flex-col justify-center items-center mt-40 lg:mt-64">
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-bold text-neutral-300 w-9/12 overflow-ellipsis overflow-hidden whitespace-nowrap">
                    {product.name}
                  </p>
                  <p className="text-lg font-bold text-neutral-300">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  {product.sizes.map((size) => {
                    return (
                      <button
                        key={size}
                        className="font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-60 text-neutral-400 hover:text-neutral-100 rounded-lg mx-1 lg:mx-2.5"
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
