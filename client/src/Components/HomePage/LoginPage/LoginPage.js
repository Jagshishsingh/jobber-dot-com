import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './LoginPage.css';

// -----------URL's-----------
const EMAIL_DATA_URL = 'https://localhost:1000'


function LoginPage({ login, setLogin, values }) {
    const initialLoginDataState = {
        "email": "",
        "password": "",
        'emailError': false,
        'passwordError': false
    }
    const [loginData, setLoginData] = useState(initialLoginDataState);

    let emailAuthentication = () => { // CALLED WHEN EMAIL IS ENTERED
        console.log(loginData["email"])
        function emailFetch() {
            let checkEmailExistence = false;
            // const checkEmailExistence = await fetch(`${EMAIL_DATA_URL}/:email`)  // FETCH DATA FROM SERVER
            // make this function async
            return checkEmailExistence
        }
        if (emailFetch()) {
            return 'FOUND';
        }
        setLoginData({ emailError: true, email: "", password: "" })

    }
    return (
        <div>
            {/* ------------------LOGIN-SIGNUP MODAL---------------------- */}
            <Modal open={login} onClose={() => { setLogin(false) }} center>
                <h1>EMAIL MODEL HERE : {values.customerType}</h1>
            </Modal>

        </div>
    )
}

export default LoginPage
