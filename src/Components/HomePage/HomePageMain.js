import React from 'react';
import Body from './Body';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import LoginBtns from './LoginBtns';
import Reviews from './Reviews';

function HomePageMain() {
    return (
        <>
            <HomeNavbar></HomeNavbar>
            <Body></Body>
            <LoginBtns></LoginBtns>
            <Reviews ></Reviews>
            <Footer></Footer>
        </>
    )
}

export default HomePageMain



