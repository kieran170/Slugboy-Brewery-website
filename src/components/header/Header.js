import React from "react";
import "./header.css";
import { ReactComponent as Slug } from "../../images/Slug.svg";

export default function homepage() {
  return (
    <header className="header-container">
      <div className="left-side-buttons">
        <button className="header-buttons">Home</button>
        <button className="header-buttons">Products</button>
      </div>
      <div>
        <h1>Slugbog Brewery</h1>
        <Slug />
        <h3>
          Hatched in Pontefract<br></br>
          <br></br>Established 2019<br></br>
          <br></br>Inching around the world
        </h3>
      </div>
      <div className="right-side-buttons">
        <button className="header-buttons">About Us</button>
        <button className="header-buttons">Contact</button>
      </div>
    </header>
  );
}
