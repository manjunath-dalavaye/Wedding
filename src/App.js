// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./component/Navbar/NavBar";
import Carousel from "./component/Carousel/Carousel";
import Intro from './component/Intro/Intro';
import NavBar from './component/Navbar/NavBar';
import Banner from './component/Banner-1/BannerOne';
import Friend from './component/Friend/Friend';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <Intro/>
      <Banner/>
      <Friend/>
      <Footer/>
      
    </div>
  );
}

export default App;
