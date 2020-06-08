import React from "react";
import "./footer.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <p style={{ color: 'black'}}>
        <FontAwesomeIcon icon={faCopyright} /> Wonya 2020
      </p>
    </div>
  );
}

export default Footer;
