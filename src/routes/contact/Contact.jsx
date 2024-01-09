import React from "react";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Contact Us
      </h1>
      <ul className="text-neutral-400 text-sm w-5/12 mx-auto mb-10 mt-3">
        <li>
          <p>
            {" "}
            We're always here to help you with any queries or assistance you
            might need. Please feel free to get in touch with us using the
            information below:
          </p>
          <br />
          <h4 className="text-neutral-100 text-lg font-semibold">
            Email:
          </h4>{" "}
          <a
            href="
            someone@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-100"
          >
            someone@gmail.com
          </a>
          <br />
        </li>
        <li>
          <br />
          <h4 className="text-neutral-100 text-lg font-semibold">
            Phone:
          </h4>{" "}
          <a
            href="tel:+1-234-567-8900"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-100"
          >
            +1-234-567-8900
          </a>
          <br />
        </li>
        <li>
          <br />
          <h4 className="text-neutral-100 text-lg font-semibold">
            Address:
          </h4>{" "}
          <a
            href="https://goo.gl/maps/7ePuxtQq8pdCqY2J9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-100"
          >
            1234 Main St, City, State 12345
          </a>
          <br />
        </li>
      </ul>
      <Footer />
    </div>
  );
}
