import React, { useEffect, useRef, useState } from "react";

export default function Slideshow(props) {
  let images = props.images;
  let [index, setIndex] = useState(0);
  const imgRef = useRef(null); // Create a ref
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.remove("active");
      imgRef.current.classList.add("active");
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // This will clear Interval on unmount
  }, [index, images]);

  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <button
          className="w-16 mx-2.5 justify-center items-center h-96 font-medium px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-2xl hidden sm:flex"
          onClick={() => {
            setIndex(index - 1 < 0 ? images.length - 1 : index - 1);
          }}
          style={{
            height: "85vh",
            maxHeight: "33rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          ref={imgRef} // Use the ref here
          className="w-full h-min-96 rounded-2xl border border-red-900 mx-5 sm:mx-0"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            height: "85vh",
            maxHeight: "33rem",
            backgroundPosition: "center",
          }}
        />
        <button
          className="w-16 mx-2.5 justify-center items-center h-96 font-medium px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-2xl hidden sm:flex"
          onClick={() => {
            setIndex((index + 1) % images.length);
          }}
          style={{
            height: "85vh",
            maxHeight: "33rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 mx-2 rounded-full ${
              i === index
                ? "bg-red-900 border border-red-500"
                : "bg-neutral-600 border border-neutral-500"
            }`}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </div>
    </>
  );
}
