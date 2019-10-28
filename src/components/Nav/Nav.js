import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import QuickLinks from "../QuickLinks/quick-links";
import QuickSearch from '../QuickSearch/quick-search';

function Nav() {
  return (
    <div>
      <QuickSearch/>
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