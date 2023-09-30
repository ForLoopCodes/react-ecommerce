import React from "react";
import Header from "../components/Header";

export default function Main(props) {
  let screenW = window.innerWidth;
  let size0 = screenW > 0 && screenW < 640;
  let size1 = screenW > 640 && screenW < 1100;
  let size2 = screenW > 1100;
  return (
    <div>
      <Header size0={size0} size1={size1} size2={size2} />
    </div>
  );
}
