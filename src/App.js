import React from 'react';
import './App.css';
import Body from './Components/Body';
import HomeNavbar from './Components/HomeNavbar';
import LoginBtns from './Components/LoginBtns';

function App() {
  return (
    <div className="App">
      <HomeNavbar></HomeNavbar>
      <Body></Body>
      <LoginBtns></LoginBtns>
      </div>
  );
}

export default App;
