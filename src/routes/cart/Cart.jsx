import React from "react";
import Footer from "../../components/Footer";

export default function Cart(props) {
  const total = props.products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        All Products
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Here's a list of all our products. We have a wide range of products.
      </p>
      <table className="w-7/12 text-center mx-auto text-neutral-300">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td className="flex text-left justify-start gap-5 items-center py-2">
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-14 h-14 rounded-lg aspect-square"
                ></div>
                {product.name}
              </td>
              <td>${product.price + 10}</td>
              <td>${product.price}</td>
              <td className="justify-between">
                <button className="bg-neutral-700 mx-2 text-neutral-100 px-2 py-1 text-sm rounded-lg">
                  -
                </button>
              </td>
              <td>10</td>
              <td>
                <button className="bg-neutral-700 mx-2 text-neutral-100 px-2 py-1 text-sm rounded-lg">
                  +
                </button>
              </td>
              <td>
                <button
                  className="bg-neutral-700 mx-2 text-neutral-100 px-2 py-1 text-sm rounded-lg"
                  onClick={() => {
                    props.removeProduct(product);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total:</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex justify-center">
        <button className="bg-red-500 text-neutral-100 px-4 py-2 rounded-lg mt-6 mb-8">
          Proceed to checkout
        </button>
      </div>

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
