
import pic1 from '../images/pic1.png'
import Footer from '../Components/footer'
import React, { Component, useRef, useEffect } from 'react';
import ReactShadowScroll from 'react-shadow-scroll';
import { Map, GoogleApiWrapper } from 'google-maps-react';





class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {

        const mapStyles = {
            width: '50%',
            height: '70%',
            marginTop:100,
            marginLeft:100 ,
            backgroundColor:'red'
          };
        return (

            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />


        );
    }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyDkcRji7tbkVS2GsUcz0ZKAuRgPPpsz_P0'
  })(MapScreen);