
import React from 'react';
import pic1 from '../assets/images/pic1.png'
import Footer from '../Components/footer'



class ContactUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
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

             
               <h3>alaa.ashraf775@gmail.com</h3>
               <h3>27560995</h3>
               <h3>01142815672</h3>
              

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