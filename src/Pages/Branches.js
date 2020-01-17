
import pic1 from '../assets/images/pic1.png'
import Footer from '../Components/footer'
import React, { Component, useRef, useEffect } from 'react';
import ReactShadowScroll from 'react-shadow-scroll';
import branchIcon from '../assets/images/branch_icon.png'
import MapScreen from '../Components/Map'





class Branches extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {
        return (




            <div className="body" >
               
                <MapScreen/>

         
                <ReactShadowScroll className='scroll' scrollWidth={10} isShadow={true}  scrollPadding={10} 
                    style={{ borderWidth: 1, borderColor: '#d4d4d7', width: 300, height: 500, marginLeft: 800 ,marginTop:50   }}
                    styleSubcontainer={{ borderWidth: 1, borderColor: '#d4d4d7', }}>

                    <ul className='scroll' >
                        <li className='row-reverse' >
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50  }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                        <li className='row-reverse'>
                            <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                            <ul className='scroll' style={{marginTop:5}}>
                                <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>
                                
                            </ul>
                            
                        </li>

                    </ul>
                </ReactShadowScroll>
               

            </div>


        );
    }
}

export default Branches;