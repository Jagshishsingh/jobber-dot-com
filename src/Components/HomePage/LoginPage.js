import React, { useState,useRef } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TextField, Button, MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './LoginPage.css';
import SignUp from './SignUp';

// -----------URL's-----------
const EMAIL_DATA_URL = 'https://localhost:1000' 


function LoginPage({ login, setLogin, values }) {
    const initialLoginDataState = {
        "email":"",
        "password":"",
        'emailError':false,
        'passwordError':false
    }
    const [emailVerifed, setEmailVerifed] = useState(false);
    const [loginData, setLoginData] = useState(initialLoginDataState);
    const [passwordVerifed, setPasswordlVerifed] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [forgotPassword, setforgotPassword] = useState(false)



    let emailAuthentication = (e) => { // CALLED WHEN EMAIL IS ENTERED
        console.log(loginData["email"])
        function emailFetch(){
            let checkEmailExistence = false;
            // const checkEmailExistence = await fetch(`${EMAIL_DATA_URL}/:email`)  // FETCH DATA FROM SERVER
            // make this function async
            return checkEmailExistence
            
        }
        ;
        if (emailFetch()){
            e(true);  // AUTHENTICATION 
            setLogin(false); // CLOSING CURRENT EMAIL MODAL
            return 'FOUND';
        }
        setLoginData({emailError:true, email:"",password:""})
        // console.log('NOT FOUND');
        
        // console.log('ref value:',emailRef.current);
        // return 'NOT FOUND';
        
    }

    let passwordAuthentication = (e) => {
        e(true);  // AUTHENTICATION
        setEmailVerifed(false) // CLOSING CURRENT PASSWORD MODAL
    }
    return (
        <div>
            {/* ------------------EMAIL MODAL---------------------- */}
            <Modal open={login} onClose={() => { setLogin(false) }} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="login">
                    <h3>Login</h3>
                    <p>{values.customerType} Email </p>
                    <div className="">
                        <form action="" method="post">
                            <TextField  
                            error = {loginData['emailError']}
                            label="Enter Email" name="email" className="email" onChange={(e)=>setLoginData({"email":e.target.value})}/>
                            <Button variant="contained" color="primary" style={{ 'display': 'block', 'marginTop': '1rem' }}
                                onClick={() => emailAuthentication(setEmailVerifed)}
                            > Click</Button>
                        </form>
                        <Button color="primary" onClick={() => { setLogin(false); setSignUp(true); }}>Sign Up Instead !</Button>
                    </div>
                </div>
            </Modal>

            {/* ------------------PASSWORD MODAL-------------------- */}
            <Modal open={emailVerifed} center onClose={() => { setEmailVerifed(false) }}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }} >
                <div className="login">
                    <h3>Login</h3>
                    <p>{values.customerType} Password </p>
                    <div className="">
                        <form action="" method="post">
                            <TextField type="password" label="Enter Password" />
                            <Button variant="contained" color="primary" style={{ 'display': 'block', 'margin-top': '1rem' }}
                                onClick={() => passwordAuthentication(setPasswordlVerifed)}
                            > Click</Button>
                        </form>
                        <Button color="primary" onClick={() => { setEmailVerifed(false); setforgotPassword(true); }}>Forgot Password !</Button>

                    </div>
                </div>
            </Modal>

            {/* ------------------SIGN UP MODAL-------------------- */}
            <Modal open={signUp} center onClose={() => { setSignUp(false) }}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }} >
                    <SignUp values={values} setSignUp={setSignUp}></SignUp>
                </Modal>

        </div>
    )
}

export default LoginPage
