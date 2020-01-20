import React from 'react';
import './App.scss';
import '../src/assets/Styles/generalStyle.scss'
import Header from './assets/Components/header'
import Navbar from './assets/Components/navbar'
import Footer from './assets/Components/footer'
import { BrowserRouter } from "react-router-dom";





function App() {

  return (
   

      <div className="App">
        <Header />
        {/* <Navbar /> */}
        <Footer />
      </div>



  );
}

export default App;
