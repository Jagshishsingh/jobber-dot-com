import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import LoginBtns from './LoginBtns';
import LoginPage from './LoginPage';
import Reviews from './Reviews';

function HomePageMain() {
    const [loginIndividual, setLoginIndividual] = useState(false);
    const [loginCompany, setLoginCompany] = useState(false);
    {/* HERE ,PASS DIFFERENT VALUES OF COMPANY OR INDIVIDUAL */}
    const companyValues = { customerType: 'company' };
    const individualValues = { customerType: 'individual' }
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <Body></Body>
            <LoginBtns setLoginIndividual={setLoginIndividual} setLoginCompany={setLoginCompany}></LoginBtns>
            <Reviews ></Reviews>
            <Footer></Footer>
            
            <LoginPage login={loginCompany} setLogin={setLoginCompany}
                values={companyValues}>  
            </LoginPage>

            <LoginPage login={loginIndividual} setLogin={setLoginIndividual} 
                values={individualValues}>
            </LoginPage>
        </div>
    )
}

export default HomePageMain



