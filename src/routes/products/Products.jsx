import React from "react";
import Cardcontainergrid from "../../components/Cardcontainergrid";
import Footer from "../../components/Footer";

export default function Products(props) {
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        All Products
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Here's a list of all our products. We have a wide range of products.
      </p>
      <Cardcontainergrid
        products={[
          {
            id: 1,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          },
          {
            id: 2,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_1X._SY116_CB618751254_.jpg",
          },
          {
            id: 3,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc2-4-low._SY116_CB578749643_.jpg",
          },
          {
            id: 4,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/PCQC_Jewl_low_res._SY116_CB578749643_.png",
          },
          {
            id: 5,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
          {
            id: 6,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
          {
            id: 1,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          },
          {
            id: 2,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_1X._SY116_CB618751254_.jpg",
          },
          {
            id: 3,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc2-4-low._SY116_CB578749643_.jpg",
          },
          {
            id: 4,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/PCQC_Jewl_low_res._SY116_CB578749643_.png",
          },
          {
            id: 5,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
          {
            id: 6,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
          {
            id: 1,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          },
          {
            id: 2,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_1X._SY116_CB618751254_.jpg",
          },
          {
            id: 3,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc2-4-low._SY116_CB578749643_.jpg",
          },
          {
            id: 4,
            name: "Mens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/PCQC_Jewl_low_res._SY116_CB578749643_.png",
          },
          {
            id: 5,
            name: "Womens T-Shirt",
            price: 25,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
          {
            id: 6,
            name: "Mens Hoodie",
            price: 35,
            sizes: ["S", "M", "L", "XL"],
            image:
              "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/All_QC_JWLSSH/Sep25/Pcqc1-4-low._SY116_CB578749643_.png",
          },
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Woah! You just scrolled through our entire collection.
      </h1>
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
