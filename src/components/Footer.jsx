import React from "react";

export default function Footer(props) {
  return (
    <div className="w-full bg-neutral-700 flex md:block flex-col md:flex-row justify-center items-center py-10 px-10 md:px-0">
      <div className="w-full md:w-content flex flex-col md:flex-row justify-center items-start md:items-start gap-2 md:gap-32">
        <div className="flex flex-col justify-start items-start">
          <p className="text-lg font-bold text-neutral-300">About</p>
          <a
            href="/about"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            About Us
          </a>
          <a
            href="/careers"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Careers
          </a>
          <a
            href="/press"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Press Releases
          </a>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Help</p>
          <a
            href="/payments"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Payments
          </a>
          <a
            href="/shipping"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Shipping
          </a>
          <a
            href="/cancellation"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Cancellation & Returns
          </a>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Policy</p>
          <a
            href="/return-policy"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Return Policy
          </a>
          <a
            href="/terms"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Terms Of Use
          </a>
          <a
            href="/security"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Security
          </a>
          <a
            href="/privacy"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Privacy
          </a>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Social</p>
          <a
            href="/facebook"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Facebook
          </a>
          <a
            href="/twitter"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            Twitter
          </a>
          <a
            href="/youtube"
            className="text-sm font-medium text-neutral-300 mt-2"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-full mt-10 md:mt-10">
        <p className="text-sm font-medium text-neutral-300">
          © 2024 Common Dears.
        </p>
      </div>
    </div>
  );
}
