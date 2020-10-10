import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TextField, Button, MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './LoginPage.css';
import SignUp from './SignUp';

function LoginPage({ login, setLogin, values }) {
    const [emailVerifed, setEmailVerifed] = useState(false);
    const [passwordVerifed, setPasswordlVerifed] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [forgotPassword, setforgotPassword] = useState(false)



    let emailAuthentication = (e) => { // CALLED WHEN EMAIL IS ENTERED
        e(true);  // AUTHENTICATION 
        setLogin(false); // CLOSING CURRENT EMAIL MODAL
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
                <div class="login">
                    <h3>Login</h3>
                    <p>{values.customerType} Email </p>
                    <div class="">
                        <form action="" method="post">
                            <TextField label="Enter Email" />
                            <Button variant="contained" color="primary" style={{ 'display': 'block', 'margin-top': '1rem' }}
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
                <div class="login">
                    <h3>Login</h3>
                    <p>{values.customerType} Password </p>
                    <div class="">
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
