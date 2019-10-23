import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "../../routes/login";
import RegisterPage from "../../routes/register";
import AboutPage from "../../routes/about";
import FaqsPage from "../../routes/faqs";
import ContactUsPage from "../../routes/contact-us";
import HomePage from "../../routes/homepage";

function pages() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
      <Route path="/faqs">
        <FaqsPage/>
      </Route>
      <Route path="/about">
        <AboutPage/>
      </Route>
      <Route path="/contact-us">
        <ContactUsPage/>
      </Route>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  )
}

export default pages;