import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TextField, Button } from '@material-ui/core';
import './LoginPage.css';

function LoginPage({ open, setOpen,values }) {
    const [emailVerifed, setEmailVerifed] = useState(false);
    const [passwordVerifed, setPasswordlVerifed] = useState(false);

    let emailAuthentication = (e) => { // CALLED WHEN EMAIL IS ENTERED
        e(true);  // AUTHENTICATION 
        setOpen(false); // CLOSING CURRENT EMAIL MODAL
    }

    let passwordAuthentication = (e) => {
        e(true);  // AUTHENTICATION
        setEmailVerifed(false) // CLOSING CURRENT PASSWORD MODAL
    }
    return (
        <div>
            {/* ------------------EMAIL MODAL---------------------- */}
            <Modal open={open} onClose={() => { setOpen(false) }} center
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
                    </div>
                    <p>SIGN UP INSTEAD</p>
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
                        </div>
                        <p>forgot password</p>
                    </div>
            </Modal>
        </div>
    )
}

export default LoginPage
