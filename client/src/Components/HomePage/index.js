import React, { useState } from 'react';
import Body from './Body/Body';
import Reviews from './Body/Reviews';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import LoginPage from './LoginPage/LoginPage';


export default function HomePage() {
    const [loginIndividual, setLoginIndividual] = useState(false);
    const [loginCompany, setLoginCompany] = useState(false);
    {/* HERE ,PASS DIFFERENT VALUES OF COMPANY OR INDIVIDUAL */}
    const companyValues = { customerType: 'company' };
    const individualValues = { customerType: 'individual' }
    return (
        <div>
            <Navbar></Navbar>
            <Body setLoginIndividual={setLoginIndividual} setLoginCompany={setLoginCompany}></Body>
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




