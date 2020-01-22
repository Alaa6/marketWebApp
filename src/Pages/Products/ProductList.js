
import React from 'react';
import productCard from '../../assets/Views/ProductCard/productCard'

import './product.scss';


import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import product7 from '../../assets/images/product7.png'
import product8 from '../../assets/images/product8.png'
import product9 from '../../assets/images/product9.png'
import product10 from '../../assets/images/product10.png'



const Products = [
 {img : product1 , name :'بيبسي',price:'16',disPrice:'13' },
 {img : product2 , name :'سي فود',price:'60',disPrice:'40' },
 {img : product3 , name :'فليه',price:'70',disPrice:'50' },
 {img : product4 , name :'بيبسي' ,price:'10',disPrice:'7' },
 {img : product5 , name :'طحينة' ,price:'15',disPrice:'12'},
 {img : product6 , name :'حلويات شرقية',price:'10',disPrice:'7.5' },
 {img : product7 , name :'وافل'  ,price:'40',disPrice:'30' },
 {img : product8 , name :'غريبة' ,price:'30',disPrice:'25'},
 {img : product9 , name :'رنجة' ,price:'30',disPrice:'25' },
 {img : product10 , name :'بيبسي'  ,price:'16',disPrice:'13'},
  
];


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Products :[
        {img : product1 , name :'بيبسي'  ,price:'16',disPrice:'13' },
        {img : product2 , name :'سي فود' ,price:'60',disPrice:'40' },
        {img : product3 , name :'فليه'   ,price:'70',disPrice:'50' },
        {img : product4 , name :'بيبسي'  ,price:'16',disPrice:'13' },
        {img : product5 , name :'طحينة'  ,price:'10',disPrice:'7'},
        {img : product6 , name :'حلويات شرقية',price:'15',disPrice:'12' },
        {img : product7 , name :'وافل'   ,price:'10',disPrice:'7.5'},
        {img : product8 , name :'غريبة'  ,price:'40',disPrice:'30' },
        {img : product9 , name :'رنجة'   ,price:'30',disPrice:'25'},
        {img : product10 , name :'بيبسي' ,price:'16',disPrice:'13'},
         
       ]
       
    };

      
  }



  render() {
   

    return (
      <div>
      

<div className="container">
        {Products.map((src ,index) => {
          console.log('hey hey kabten    '+src.price);
          
           
          return <React.Fragment key={index}>

         { productCard({
           
           index :index ,
           imgSrc :src.img ,
           productName : src.name ,
           price: '300' ,
           buttomText :'تفاصيل ' ,
           onClick : null ,
           price :src.price,
           disPrice :src.disPrice
         })}

        </React.Fragment> 

        }) }     
      </div>



       {/* <div className='body'>
    
          <Slider autoplay={0.5}  duration={5000}>
            {slides.map((slide, index) => <div key={index}>
              <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                <img src={slide.image} style={{ alignSelf: 'center' }} />
                <ul className='scroll div' style={{ marginTop: 5 }}>
                  <div className="list-row" >
                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                    <li style={{ fontSize: 16, textAlign: 'center' }}>: {slide.price}</li>

                  </div>

                  <div className="list-row" >
                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                    <li style={{ fontSize: 16, textAlign: 'center' }}> :   {slide.disPrice}</li>
                  </div>


                </ul>


              </div>
            </div>)}
          </Slider>

    </div>  */}

      </div>



      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Name:
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>
    );
  }
}

export default ProductList;