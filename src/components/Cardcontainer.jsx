import React, { useRef } from "react";

export default function Cardcontainer(props) {
  const containerRef = useRef();
  const startScrollPos = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startScrollPos.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && containerRef.current) {
      containerRef.current.scrollLeft += startScrollPos.current - e.clientX;
      startScrollPos.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="w-full flex justify-start py-8 items-center horizontalscrollbarhidden overflow-x-scroll hide-scrollbar px-4 sm:px-8 bg-neutral-900"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex flex-nowrap justify-start gap-5 sm:gap-8 lg:gap-8 xl:gap-3 px-4">
        {props.products.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => {
                window.location.href = `/product/${product.id}`;
              }}
              className="w-52 sm:w-62 md:w-52 h-content first:ml-5 flex flex-col justify-center relative items-start rounded-3xl p-1.5 hover:scale-105 z-9"
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full rounded-lg aspect-square"
              ></div>
              <div className="cart-icon w-10 h-10 rounded-md bg-neutral-100 bg-opacity-60 flex justify-center items-center absolute z-10 top-4 right-4 hover:bg-opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col justify-start items-start rounded-b-2xl px-1 py-2 text-sm ">
                <div className="flex flex-col justify-between items-start w-full">
                  <p className="text-lg font-medium text-neutral-300 w-full overflow-ellipsis overflow-hidden whitespace-nowrap mt-1">
                    {product.name}
                  </p>
                  <div className="flex justify-center items-end mt-1">
                    <p className="text-lg font-normal text-neutral-500 line-through mr-2">
                      ₹{product.price + 10}
                    </p>
                    <p className="text-lg font-medium text-neutral-200">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
