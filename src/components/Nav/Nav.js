import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import QuickLinks from "../QuickLinks/quick-links";

function Nav() {
  return (
    <div>
      <QuickLinks/>
      <div>
        <ul>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;