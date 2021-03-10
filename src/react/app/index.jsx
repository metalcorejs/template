import { hot } from "react-hot-loader/root";
import React from "react";
import img1 from "../../static/images/1.jpg";
import img1jpg from "../../static/images/1.webp";

function App() {
  return (
    <>
      <h1>Hello React!!!</h1>
      <picture>
        <source srcSet={img1} />
        <img loading="lazy" src={img1jpg} alt="running man" className="img" />
      </picture>
    </>
  );
}

export default hot(App);
