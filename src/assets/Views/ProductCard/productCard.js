import React from 'react';
import './product.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import ProductDetails from '../../../Pages/Products/productDetails'




function Product( props) {
 
  return (
    <Router>
       <div className='card' >
        <img src ={props.imgSrc} className='imgProduct'></img>
        <h3>{props.productName}</h3>
         <p>{props.price}</p>
         <button  className="button primary" onClick={props.onClick}    > <Link to={`/productDetails`} style={{ textDecoration: 'none', color: '#fff' }} >{props.buttomText}</Link></button>
    
    </div>

    <Switch>
          
          
          <Route path={`/productDetails`} >
          <ProductDetails data={props}/>
          </Route>
         
        </Switch>




    </Router>

   
  );
}

export default Product;
