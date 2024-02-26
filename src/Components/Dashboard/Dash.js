import React from "react";
import Nav from "../Navbar/Nav";
import "./Dash.css";
export default function Dash() {
  return (
    <>
      <div>
        <Nav />
        <iframe
          src="https://www.youtube.com/embed/B1TRRiLOw0Q?si=X6xuIlFEsMJRG47y?&showcontrols=0&loop=1&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
