import React from "react";
import Slideshow from "../components/Slideshow";
import Cardcontainer from "../components/Cardcontainer";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div className="absolute top-20 h-screen w-full z-10">
      <div className="w-full flex justify-center items-center">
        <button className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg">
          Shirts
        </button>
        <button className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg">
          Hoodies
        </button>
        <button className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg">
          Hats
        </button>
        <button className="mx-2.5 font-medium py-1.5 px-3 text-sm bg-neutral-500 bg-opacity-30 text-neutral-400 hover:text-neutral-100 rounded-lg">
          Accessories
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        New Arrivals
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our new arrivals. These are the products that our users love the
        most.
      </p>
      <Slideshow
        images={[
          "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/Kickstarter/Hero/Final/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_Jupiter1_PC_Hero_3000x1200_2._CB577020131_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/PFF-Unrec-3000._CB577063325_.jpg",
          "https://i.imgur.com/1QZqj5z.png",
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Featured Products
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our featured products. We have crafted these products with love
        & care.
      </p>
      <Cardcontainer
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
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Best Sellers
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our best selling products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
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
        ]}
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
          "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/Kickstarter/Hero/Final/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_Jupiter1_PC_Hero_3000x1200_2._CB577020131_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/PFF-Unrec-3000._CB577063325_.jpg",
          "https://i.imgur.com/1QZqj5z.png",
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Shirt Section
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
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
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Hoodie Section
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
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
        ]}
      />
      <h1 className="text-2xl font-bold text-center mt-10 text-neutral-300">
        Accessories Section.
      </h1>
      <p className="text-center text-neutral-400 text-sm w-9/12 mx-auto mb-10 mt-3">
        Some of our trending products. These are the products that our users
        love the most.
      </p>
      <Cardcontainer
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
        ]}
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
