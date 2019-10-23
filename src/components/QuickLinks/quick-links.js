import React from 'react';
import {Link} from "react-router-dom";

function QuickLinks() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/faqs">Faqs</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuickLinks;