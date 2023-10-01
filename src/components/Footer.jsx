import React from "react";

export default function Footer(props) {
  return (
    <div className="w-full bg-neutral-700 flex md:block flex-col md:flex-row justify-center items-center py-10 px-10 md:px-0">
      <div className="w-full md:w-content flex flex-col md:flex-row justify-center items-start md:items-start gap-2 md:gap-32">
        <div className="flex flex-col justify-start items-start">
          <p className="text-lg font-bold text-neutral-300">About</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">About Us</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Careers</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">
            Press Releases
          </p>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Help</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Payments</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Shipping</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">
            Cancellation & Returns
          </p>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Policy</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">
            Return Policy
          </p>
          <p className="text-sm font-medium text-neutral-300 mt-2">
            Terms Of Use
          </p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Security</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Privacy</p>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
          <p className="text-lg font-bold text-neutral-300">Social</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Facebook</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">Twitter</p>
          <p className="text-sm font-medium text-neutral-300 mt-2">YouTube</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-full mt-10 md:mt-10">
        <p className="text-sm font-medium text-neutral-300">
          © 2021 Company Name
        </p>
      </div>
    </div>
  );
}
