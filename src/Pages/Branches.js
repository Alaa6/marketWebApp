
import pic1 from '../assets/images/pic1.png'
import React, { Component, useRef, useEffect } from 'react';
import ReactShadowScroll from 'react-shadow-scroll';
import branchIcon from '../assets/images/branch_icon.png'
import MapScreen from '../assets/Components/Map'





class Branches extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {
        return (
            <section className="row-map body">

                <div style={{ backgroundColor: 'green', width: '70%', height: '50%' ,marginLeft:100 ,marginTop:100 }} >

                        <MapScreen />

                </div>
                <div style={{position:'absolute' ,right:0 ,marginRight:100}}>
                    <ReactShadowScroll className='scroll' scrollWidth={10} isShadow={true} scrollPadding={10}
                        style={{ borderWidth: 1, borderColor: '#d4d4d7', width: 300, height: 500, marginLeft: 50, marginTop: 50 }}
                        styleSubcontainer={{ borderWidth: 1, borderColor: '#d4d4d7', }}>

                        <ul className='scroll' >
                            <li className='row-reverse' >
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                            <li className='row-reverse'>
                                <img src={branchIcon} alt='Logo' style={{ width: 50, height: 50 }} />
                                <ul className='scroll' style={{ marginTop: 5 }}>
                                    <li style={{ fontSize: 14, color: '#59b210', textAlign: 'center' }}>فرع حلوان</li>
                                    <li style={{ fontSize: 12, textAlign: 'center' }}>ركن/حلوان</li>

                                </ul>

                            </li>

                        </ul>
                    </ReactShadowScroll>



                </div>


            </section>












        );
    }
}

export default Branches;