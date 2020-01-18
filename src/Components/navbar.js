import React, { Component } from "react";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products/Products'
import ContactUs from '../Pages/ContactUs'
import Branches from '../Pages/Branches'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="nav" >
            <li> <Link to="/"> الرئيسية </Link> </li>
            <li> <Link to="/about"> عن الشركة</Link></li>
            <li><Link to="/products"> المنتجات</Link></li>
            <li><Link to="/branches"> الفروع</Link></li>
            <li id="lastItem"><Link to="/contactUs"> اتصل بنا </Link></li>
          </ul>

          <Switch>
          <Route path="/branches">
              <Branches />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </Router>


    );
  }
}

export default Navbar;