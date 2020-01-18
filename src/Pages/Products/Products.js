
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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

{/*const slides = [
  { price: ' : السعر الاصلي' , disPrice: ': السعر بعد الخصم' ,image :Logo },
  { price: ' : السعر الاصلي' , disPrice: ': السعر بعد الخصم' ,image :Logo },
  { price: ' : السعر الاصلي' , disPrice: ': السعر بعد الخصم' ,image :Logo },
  { price: ' : السعر الاصلي' , disPrice: ': السعر بعد الخصم' ,image :Logo },
  { price: ' : السعر الاصلي' , disPrice: ': السعر بعد الخصم' ,image :Logo },
 
];*/
}
const movies = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];


class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

      
  }

  render() {
    return (
      <div>


<div className="container">
        {movies.map(src => (
          <div
            key={src}
            className="card"
            style={{
              backgroundImage: `url(${src})`
            }}
          />
        ))}
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

export default ContactUs;