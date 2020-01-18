
import React from 'react';
import pic1 from '../assets/images/pic1.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
  { title: 'First item', description: 'Lorem ipsum' },
  { title: 'Second item', description: 'Lorem ipsum' }
];


class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <div className='body'>
          <img src={pic1} alt="Logo" className="Logo-a" />


          <Slider autoplay={0.5}>
            {slides.map((slide, index) => <div key={index}>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>)}
          </Slider>

        </div>

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