
import React from 'react';
import productCard from '../../assets/Views/ProductCard/productCard'

import './product.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import logo from '../../assets/images/logo.png';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    
       
    };

      
  }



  render() {
      const {data}=this.props
  
    
    return (

        <div className="App" style={{ marginTop: 30, marginRight: 70 }} >

        <img src={data.imgSrc} alt="Logo" />

        <ul className='scroll div' style={{ marginTop: 5 }}>
             <li style={{ fontSize: 16, textAlign: 'center' }}> {data.productNamr}</li>
            <div className="list-row" >
              <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center',textDecoration:'line-through' }}> {data.price}</li>
           

            </div>

            <div className="list-row" >
                <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>

            </div>


        </ul>


    </div>
    



    );
  }
}

export default ProductDetails;