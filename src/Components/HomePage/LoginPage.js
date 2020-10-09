import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TextField, Button } from '@material-ui/core';

function LoginPage({ open, setOpen }) {
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
            <Modal open={open} onClose={() => { setOpen(false) }} center classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
            >
                <div class="login">
                    <h3>Login</h3>
                    <p>Company login </p>
                    <div class="">
                        <form action="" method="post">
                            <TextField label="Enter Email" />
                            <Button variant="contained" color="primary" style={{ 'display': 'block', 'margin-top': '1rem' }}
                                onClick={() => emailAuthentication(setEmailVerifed)}
                            > Click</Button>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* ------------------PASSWORD MODAL-------------------- */}
            <Modal open={emailVerifed} center>
                <div class="login">
                    <h3>Login</h3>
                    <p>Logged in </p>
                    <div class="">
                        <form action="" method="post">
                            <TextField type="password" label="Enter Password" />
                            <Button variant="contained" color="primary" style={{ 'display': 'block', 'margin-top': '1rem' }}
                                onClick={() => passwordAuthentication(setPasswordlVerifed)}
                            > Click</Button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default LoginPage
