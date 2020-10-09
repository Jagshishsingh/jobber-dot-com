import React from 'react';
import './App.css';
import Body from './Components/HomePage/Body';
import HomeNavbar from './Components/HomePage/HomeNavbar';
import LoginBtns from './Components/HomePage/LoginBtns';
import Reviews from './Components/HomePage/Reviews';

function App() {
  return (
    <div className="App">
      <HomeNavbar></HomeNavbar>
      <Body></Body>
      <LoginBtns></LoginBtns>
      <Reviews ></Reviews>
      {/* <Reviews margin={"10rem"} msg='bb'></Reviews> */}
      </div>
  );
}

export default App;
