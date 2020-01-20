import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from '../../Pages/About'
import Branches from '../../Pages/Branches'



class Footer extends React.Component {
 

    render() {

       const {branchesOrAbout} =this.props
    return (
        <div>

<Router>
            <div className='footer' >

                <div className='row'> 
               <div  style={{marginLeft :100}}>
                    <p className='about-comp-word' style={{ marginTop: 80, fontSize: 20  }}>  عن الشركة</p>
                    <p className='about-comp-word' style={{ fontSize: 16, }} branchesOrAbout={false}>
                        <Link to="/about" style={{ textDecoration: 'none', color: '#868686' }} >عن الشركة
                    </Link></p>
                    <p className='about-comp-word' style={{fontSize: 16 }}>
                         <Link to="/branches" style={{ textDecoration: 'none', color: '#868686' }}  branchesOrAbout={false}>الفروع
                     </Link> </p>
                </div>
              <div  style={{marginRight :100}}>
                <p className='about-comp-word' style={{ marginTop: 80, fontSize: 20 }}> اتصل بنا </p>
                <p className='about-comp-word' style={{ fontSize: 16, color: '#868686'}}>27560995</p>
                <p className='about-comp-word' style={{  fontSize: 16 ,color: '#868686'}}>alaa.ashraf775@gmail.com</p>
            </div>
                </div>

                
                
               <Switch>
                    {branchesOrAbout && <Route path="/branches">
                        <Branches />
                    </Route>}
                    {branchesOrAbout &&<Route path="/about">
                        <About />
                    </Route>}
                </Switch> 



            </div>


        </Router>


        </div>
       

    );
    }
}
export default Footer;