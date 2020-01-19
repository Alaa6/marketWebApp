import React, { Component } from "react";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products/Products'
import ContactUs from '../Pages/ContactUs'
import Branches from '../Pages/Branches'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../assets/images/logo.png'
import Navbar from 'navbar-react'


const items =
  [
    {name: "اتصل بنا", href: "/contactUs" },
    {name: "الفروع", href: "/branches" },
    {name: "المنتجات", href: "/products" },
    {name: "عن الشركة", href: "/about" },
    {name: "الرئيسية", href: "/" },
  ]
 




class Navbar1 extends React.Component {
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

   {/* <Navbar id='nav' items={items}  color='linear-gradient(#7ac142,green)'   itemTextColor='white' hoverColor='green' style={{ borderRightWidth :1}}/> */}
    



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

export default Navbar1;


// import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import { BrowserRouter as Router  ,Route, Link, Switch } from 'react-router-dom';

// import Home from '../Pages/Home'
// import About from '../Pages/About'
// import Products from '../Pages/Products/Products'
// import ContactUs from '../Pages/ContactUs'
// import Branches from '../Pages/Branches'


// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

// class NavbarPage extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//     <Router>
//       <MDBNavbar color="green" dark expand="md">
//         {/* <MDBNavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </MDBNavbarBrand> */}

//         {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}

//         <MDBCollapse id="navbarCollapse3 " isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav right >
           
//             <MDBNavItem>
//               <MDBNavLink to="/contactUs">اتصل بنا</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/branches">الفروع</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/products">المنتجات</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/about">عن الشركة</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem active>
//               <MDBNavLink to="/">الرئيسية</MDBNavLink>
//             </MDBNavItem>
          
          
           
           
//             {/* <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <div className="d-none d-md-inline">Dropdown</div>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem> */}
//           </MDBNavbarNav>
//           {/* <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="twitter" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="google-plus-g" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <MDBIcon icon="user" />
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav> */}
//         </MDBCollapse>
//       </MDBNavbar>

//       <Switch>
//            <Route path="/branches">
//               <Branches />
//             </Route>
//              <Route path="/about">
//                <About />
//              </Route>
//              <Route path="/products">
//                <Products />
//             </Route>
//             <Route path="/contactUs">
//                <ContactUs />
//              </Route>
//              <Route path="/">
//                <Home />
//              </Route>
//            </Switch>
//     </Router>
//     );
//   }
// }

// export default NavbarPage;