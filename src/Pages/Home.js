import React from "react";
import ImageSlider from '../assets/Components/ImageSlider/ImageSlider'
import logo from '../assets/images/logo.png';



function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//);

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            StateResult: []

        };
    }



    render() {



        return (
            <div>
               { console.log(<div/>)}
                
               
                <ImageSlider />
                <div className='body border'>


                    <div className='list-row' style={{ marginRight: 70, paddingRight: 40 }}>

                        <div className="div" style={{ marginTop: 30, marginRight: 70  }} >

                            <img src={logo} alt="Logo" style={{alignSelf:'center'}} />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>
                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                    </div>

                    <div className='list-row' style={{ marginRight: 70, paddingRight: 40 }}>

                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 20, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 18, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>
                        <div className="div" style={{ marginTop: 30, marginRight: 70 }} >

                            <img src={logo} alt="Logo" />

                            <ul className='scroll div' style={{ marginTop: 5 }}>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center' }}> 300</li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}>: السعر الاصلي</li>

                                </div>

                                <div className="list-row" >
                                    <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>
                                    <li style={{ fontSize: 16, textAlign: 'center' }}> : السعر بعد الخصم</li>
                                </div>


                            </ul>


                        </div>

                    </div>

                  

                   








                </div>




            </div>
        );
    }
}

export default Home;