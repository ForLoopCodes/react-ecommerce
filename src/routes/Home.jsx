import React from "react";
import Slideshow from "../components/Slideshow";
import Cardcontainer from "../components/Cardcontainer";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <div className="w-full flex justify-center items-center">
        <a
          className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg"
          href="#shirtSectionHomepage"
        >
          Shirts
        </a>
        <a
          className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg"
          href="#hoodieSectionHomepage"
        >
          Hoodies
        </a>
        <a
          className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg"
          href="#hatSectionHomepage"
        >
          Hats
        </a>
        <a
          className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg"
          href="#accessoriesSectionHomepage"
        >
          Accessories
        </a>
      </div>
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Crazy Deals
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        These crazy deals will blow your mind. Get them while they last!
      </p>
      <Slideshow
        images={[
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/5746600.jpg",
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/5694135.jpg",
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/3130425.jpg",
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        New Arrivals
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our new arrivals. These are the products that our users love the
        most.
      </p>
      <Cardcontainer
        products={props.products.filter((product) => {
          return product.newArrival === true;
        })}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Best Sellers
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our best selling products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
        products={props.products.filter((product) => {
          return product.bestSeller === true;
        })}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Trending
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Slideshow
        images={[
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/5694135.jpg",
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/3130425.jpg",
          "https://raw.githubusercontent.com/Joker8200/Imageeee/main/6827137.jpg",
        ]}
      />
      <h1
        className="text-2xl font-bold text-center mt-10 text-neutral-300"
        id="shirtSectionHomepage"
      >
        Shirt Section
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
        products={props.products.filter(
          (product) =>
            product.category.includes("shirt") ||
            product.category.includes("t-shirt")
        )}
      />
      <h1
        className="text-2xl font-bold text-center mt-10 text-neutral-300"
        id="hoodieSectionHomepage"
      >
        Hoodie Section
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
        products={props.products.filter(
          (product) =>
            product.category.includes("hoodie") ||
            product.category.includes("jacket")
        )}
      />
      <h1
        className="text-2xl font-bold text-center mt-10 text-neutral-300"
        id="hatSectionHomepage"
      >
        Hat Section
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
        products={props.products.filter(
          (product) =>
            product.category.includes("hat") || product.category.includes("cap")
        )}
      />
      <h1
        className="text-2xl font-bold text-center mt-10 text-neutral-300"
        id="accessoriesSectionHomepage"
      >
        Accessories Section.
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
        products={props.products.filter(
          (product) =>
            product.category.includes("accessory") ||
            product.category.includes("accessories")
        )}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Trying to find something else?
      </h1>
      <p className="text-center text-neutral-400 text-md w-9/12 mx-auto mb-0 mt-3">
        Check out our full collection on our{" "}
        <a href="/products" className="underline">
          products page
        </a>{" "}
        or go to the{" "}
        <a href="/search" className="underline">
          search
        </a>{" "}
        page.
      </p>
      <p className="text-center text-neutral-400 text-md w-9/12 mx-auto mb-10 mt-0">
        Or if you have any questions, feel free to{" "}
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
