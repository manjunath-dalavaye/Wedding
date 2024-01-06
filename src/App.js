// App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./component/Navbar/NavBar";
import Carousel from "./component/Carousel/Carousel";
import Intro from './component/Intro/Intro';
import NavBar from './component/Navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <Intro/>
    </div>
  );
}

export default App;
