import React from "react";
import "./Community.css";
import { FaDiscord } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiMessengerLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
export default function Community() {
  return (
    <>
      <div className="main">
        <h2 className="comm-text"> JOIN THE COMMUNITY</h2>
        <h4 className="comm-text">The Official Riders Discord Server</h4>
        <button className="btn-discord">
          Join <FaDiscord className="logo-discord" />
        </button>

        <h3 className="comm-conversation">JOIN THE CONVERSATION</h3>
        <a className="comm-logo2">
          <CiInstagram />
        </a>
        <a className="comm-logo2">
          <CiFacebook />
        </a>
        <a className="comm-logo2">
          <PiMessengerLogoLight />
        </a>
        <a className="comm-logo2">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
