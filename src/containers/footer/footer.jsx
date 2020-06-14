import React from 'react';
import './footer.css';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      {/* className="navbar footer navbar-fixed-bottom footer-shadow container-fluid" */}
      <h6>
        <FontAwesomeIcon icon={faCopyright} /> Wonya 2020
      </h6>
    </footer>
  );
}

export default Footer;
