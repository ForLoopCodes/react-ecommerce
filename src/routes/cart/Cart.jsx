import React from "react";
import Footer from "../../components/Footer";

export default function Cart(props) {
  const cartData = props.cartData;
  const setCartData = props.setCartData;

  const handleIncrement = (productId) => {
    const newCartData = [...cartData];
    const index = newCartData.findIndex((item) => item.id === productId);
    newCartData[index].quantity += 1;
    setCartData(newCartData);
  };

  const handleDecrement = (productId) => {
    const newCartData = [...cartData];
    const index = newCartData.findIndex((item) => item.id === productId);
    newCartData[index].quantity -= 1;
    setCartData(newCartData);
  };

  const handleRemove = (productId) => {
    const newCartData = [...cartData];
    const index = newCartData.findIndex((item) => item.id === productId);
    newCartData.splice(index, 1);
    setCartData(newCartData);
  };

  const cartProducts = props.products.filter((product) =>
    cartData.some((item) => item.id === product.id)
  );

  const totalPrice = cartProducts.reduce(
    (sum, product) =>
      sum +
      product.price * cartData.find((item) => item.id === product.id).quantity,
    0
  );

  const totalDiscountPrice = cartProducts.reduce(
    (sum, product) =>
      sum +
      product.discountPrice *
        cartData.find((item) => item.id === product.id).quantity,
    0
  );

  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        {cartProducts.length
          ? "Your Cart"
          : "Oops! Your cart is empty. Add some products to your cart."}
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        {cartProducts.length
          ? "Here is a list of all the products you have added to your cart."
          : "You can add products to your cart by clicking on the 'Add to Cart' button on any product page."}
      </p>
      <table
        className="w-7/12 text-center mx-auto text-neutral-300"
        style={{
          display: cartProducts.length ? "table" : "none",
        }}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td className="flex text-left justify-start gap-5 items-center py-2">
                <a
                  href={"/product/" + product.id}
                  style={{
                    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-14 h-14 rounded-lg aspect-square"
                >
                  {" "}
                </a>
                <a href={`/product/${product.id}`}>{product.name}</a>
              </td>
              <td className="w-56">₹{product.price}</td>
              <td className="w-56">₹{product.discountPrice}</td>
              <td className="w-2">
                <button
                  className="bg-neutral-700 mx-2 text-neutral-100 px-1 py-1 text-sm rounded-lg w-14"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
              </td>
              <td className="w-5">
                <p className="text-center w-5 mx-4 ">
                  {cartData.find((item) => item.id === product.id)?.quantity ||
                    0}
                </p>
              </td>
              <td className="w-2">
                <button
                  className="bg-neutral-700 mx-2 text-neutral-100 px-1 py-1 text-sm rounded-lg w-14"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </td>
              <td className="w-24">
                <button
                  className="bg-neutral-700 mx-2 text-neutral-100 px-2 py-2 text-sm rounded-lg"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total Price:</td>
            <td className="w-56">₹{totalPrice}</td>
            <td className="w-56">₹{totalDiscountPrice}</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="w-24">Save ₹{totalPrice - totalDiscountPrice}</td>
          </tr>
        </tbody>
      </table>
      <div
        className="w-full flex justify-center"
        style={{
          display: cartProducts.length ? "flex" : "none",
        }}
      >
        <a href="/checkout">
          <button className="bg-red-500 text-neutral-100 px-4 py-2 rounded-lg mt-6 mb-8">
            Proceed to checkout
          </button>
        </a>
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
