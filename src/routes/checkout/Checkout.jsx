import React, { useState } from "react";
import Footer from "../../components/Footer";

export default function Checkout(props) {
  const cartData = props.cartData;
  const [formVisibility, setFormVisibility] = useState(false);
  const [qrVisibility, setQrVisibility] = useState(false);

  const cartProducts = props.products.filter((product) =>
    cartData.some((item) => item.id === product.id)
  );

  const [notEmptyFields, setNotEmptyFields] = useState([]);
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
        Checkout.
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Please review your cart before proceeding to checkout.
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
            <th>Quantity</th>
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
              <td className="w-5">
                <p className="text-center w-5 mx-4 ">
                  {cartData.find((item) => item.id === product.id)?.quantity ||
                    0}
                </p>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total Price:</td>
            <td className="w-56">₹{totalPrice}</td>
            <td className="w-56">₹{totalDiscountPrice}</td>
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
        <div
          onClick={() => {
            setFormVisibility(true);
          }}
        >
          <button className="bg-red-500 text-neutral-100 px-4 py-2 rounded-lg mt-6 mb-8">
            Fill Details
          </button>
        </div>
      </div>

      <div
        id="form"
        className="w-7/12 mx-auto gap-5"
        style={{ display: formVisibility ? "flex" : "none" }}
      >
        <form className="flex flex-col gap-2 w-1/2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="checkoutforminput"
            placeholder="Enter your first name"
            onKeyUp={(e) => {
              const fieldName = "firstName";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="checkoutforminput"
            placeholder="Enter your email address"
            onKeyUp={(e) => {
              const fieldName = "email";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            required
          />

          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            name="street"
            id="street"
            className="checkoutforminput"
            placeholder="Enter your street address"
            onKeyUp={(e) => {
              const fieldName = "street";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            className="checkoutforminput"
            onKeyUp={(e) => {
              const fieldName = "city";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            placeholder="Enter your city"
            required
          />
        </form>

        <form className="flex flex-col gap-2 w-1/2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="checkoutforminput"
            placeholder="Enter your last name"
            onKeyUp={(e) => {
              const fieldName = "lastName";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="checkoutforminput"
            placeholder="Enter your phone number"
            onKeyUp={(e) => {
              const fieldName = "phone";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  if (!isNaN(e.target.value)) {
                    setNotEmptyFields([...notEmptyFields, fieldName]);
                  }
                }
              }
            }}
            required
          />

          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="checkoutforminput"
            placeholder="Enter your zip code"
            onKeyUp={(e) => {
              const fieldName = "zipCode";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  if (!isNaN(e.target.value)) {
                    setNotEmptyFields([...notEmptyFields, fieldName]);
                  }
                }
              }
            }}
            required
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            className="checkoutforminput"
            placeholder="Enter your country"
            onKeyUp={(e) => {
              const fieldName = "country";
              if (e.target.value.trim().length === 0) {
                setNotEmptyFields(
                  notEmptyFields.filter((item) => item !== fieldName)
                );
              } else {
                if (!notEmptyFields.includes(fieldName)) {
                  setNotEmptyFields([...notEmptyFields, fieldName]);
                }
              }
            }}
            required
          />
        </form>
      </div>
      <div
        className={"w-full flex justify-center"}
        style={{ display: formVisibility ? "flex" : "none" }}
      >
        <button
          className="bg-red-500 text-neutral-100 px-4 py-2 rounded-lg mt-8 mb-8 disabled:opacity-60"
          onClick={(e) => {
            setQrVisibility(true);
          }}
          type="submit"
          disabled={notEmptyFields.length !== 8 ? true : false}
        >
          Proceed to Payment.
        </button>
      </div>

      <div
        className="w-full justify-center flex-col items-center"
        style={{
          display: qrVisibility ? "flex" : "none",
        }}
      >
        <p
          className="text-center text-neutral-400 text-md w-9/12 mx-auto mb-10 mt-3"
          style={{
            display: qrVisibility ? "block" : "none",
          }}
        >
          Please scan the QR code below to proceed with the payment.
        </p>
        <img
          src="https://media.discordapp.net/attachments/1195409477252427786/1195409516779552899/Screenshot_20240112_215441_FamApp.png?ex=65b3e2de&is=65a16dde&hm=6be5874e2e1050b5e0f9b8deb7f812514345406fc02c27bca4eaed42f23f8c40&=&format=webp&quality=lossless&width=512&height=512"
          alt="QR Code"
          className="w-1/4 mb-8 rounded-2xl"
        />
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
