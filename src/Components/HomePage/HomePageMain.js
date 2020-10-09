import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import LoginBtns from './LoginBtns';
import LoginPage from './LoginPage';
import Reviews from './Reviews';

function HomePageMain() {
    const [openIndividual, setOpenIndividual] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);
    {/* HERE ,PASS DIFFERENT VALUES OF COMPANY OR INDIVIDUAL */}
    const companyValues = { customerType: 'company' };
    const individualValues = { customerType: 'individual' }
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <Body></Body>
            <LoginBtns setOpenIndividual={setOpenIndividual} setOpenCompany={setOpenCompany}></LoginBtns>
            <Reviews ></Reviews>
            <Footer></Footer>
            
            <LoginPage open={openCompany} setOpen={setOpenCompany}
                values={companyValues}>  
            </LoginPage>

            <LoginPage open={openIndividual} setOpen={setOpenIndividual} 
                values={individualValues}>
            </LoginPage>
        </div>
    )
}

export default HomePageMain



