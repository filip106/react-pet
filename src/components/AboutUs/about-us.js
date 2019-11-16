import React from "react";
import Welcome from "./Welcome/Welcome";
import Partners from "./Partners/Partners";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <Welcome/>
        <Partners/>
      </div>
    );
  }
}

export default AboutUs;