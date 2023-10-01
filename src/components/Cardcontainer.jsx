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
      className="w-full flex justify-start py-4 items-center horizontalscrollbarhidden overflow-x-scroll hide-scrollbar pl-4 sm:pl-8"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex flex-nowrap justify-start gap-5 sm:gap-8 lg:gap-10 xl:gap-12">
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
              className="w-52 sm:w-62 md:w-72 h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-80 first:ml-5 flex flex-col justify-center items-center bg-neutral-200 rounded-2xl p-3"
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
