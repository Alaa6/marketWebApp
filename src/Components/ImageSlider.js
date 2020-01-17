import React from "react";

import SimpleImageSlider from "react-simple-image-slider";

import { Slide ,Fade} from 'react-slideshow-image';
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'

const slideImages = [
    '../assets/images/pic1.png',
    '../assets/images/pic2.png',
    '../assets/images/pic3.png'
  ];


class ImageSlider extends React.Component {



    constructor() {
        super();
        this.state = {
            useGPURender: true,
            showNavs: true,
            showBullets: true,
            navStyle: 1,
            slideDuration: 0.5,
            bgColor: "#000000",
            slideIndexText: "",
            slideImages : [
                pic1,
                '../assets/images/pic2.png',
                '../assets/images/pic3.png'
              ],
        };
    }


    onClickNav = (toRight) => {
        console.log(`[App onClickNav] ${toRight}`);
    }

    onClickBullets = (idx) => {
        console.log(`[App onClickBullets] ${idx}`);
    }

    onStartSlide = (idx, length) => {
        console.log(`[App onStartSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}` });
    }

    onCompleteSlide = (idx, length) => {
        console.log(`[App onCompleteSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}` });
    }

    onToggleOptions = value => () => {
        console.log(`[App onToggleOptions] ${value}`);
        const updateValue = !this.state[value];
        this.setState({ [value]: updateValue });
    }

    onChangeSelect = event => this.setState({ [event.target.name]: event.target.value });

    

    render() {
        const images = [
            { url: pic1 },
            { url: pic2},
            { url: pic3 },
         
        ];

        console.log('ana ahoooo    '+ slideImages[0]);
        
       
          console.log('ana ahoooo    '+ slideImages[1]);
        
          
          const properties = {
            duration: 2000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
              console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
          }
          
          const Slideshow = () => {
              return (
                <div id="slide-container">
                  <Slide {...properties}>
                    <div className="each-slide">

                      <div style={{backgroundImage: `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{backgroundImage: `url(${slideImages[1]})`}}>
                        <span>Slide 2</span>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{backgroundImage: `url(${slideImages[2]})`}}>
                        <span>Slide 3</span>
                      </div>
                    </div>
                  </Slide>
                </div>
              )
          }

        return (

          
            <div  >
                <SimpleImageSlider
                    style={{ margin: "0 auto", marginTop: "50px" }}
                    width={950}
                    height={400}
                    images={images}
                    showBullets={this.state.showBullets}
                    showNavs={this.state.showNavs}
                    useGPURender={this.state.useGPURender}
                    navStyle={this.state.navStyle}
                    slideDuration={this.state.slideDuration}
                    onClickNav={this.onClickNav}
                    onClickBullets={this.onClickBullets}
                    onStartSlide={this.onStartSlide}
                    onCompleteSlide={this.onCompleteSlide}
                />
            </div>
        );
    }
}


export default ImageSlider;

