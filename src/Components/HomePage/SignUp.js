import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { TextField, Button, MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './SignUp.css';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const countries = [
    'India', 'Pakistan', 'USA', "England"
]


function SignUp({values,setSignUp}) {

    const classes = useStyles();
    const [country, setCountry] = React.useState('India');
    return (

        <div className="signup">
            <h3>{values.customerType}  Sign Up</h3>
            <div className="signUpForm">
                <form action="" method="post">
                    <div className="formRow">
                        <TextField variant="outlined" label="Business Email" />
                        <TextField variant="outlined" label="Password" />
                    </div>
                    <div className="formRow">
                        <TextField variant="filled" label="Full Name" size="small" margin="dense" />
                        <TextField variant="filled" label="Phone Number" size="small" margin="dense" />
                    </div>
                    <div className="formRow">
                        <TextField variant="outlined" label="Company" size="small" margin="dense" />
                        <TextField variant="outlined" type="number" label="Company Size" size="small" margin="dense" />
                    </div>
                    <div className={`${classes.root} formRow`}>
                        <TextField variant="filled" select label="Country" value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            size="small" margin="dense" >
                            {countries.map(country => (
                                <MenuItem key={country} value={country}>{country}</MenuItem>
                            ))}
                        </TextField>
                        
                       
                    </div>



                    <Button variant="contained" color="primary" style={{ 'display': 'block', 'margin-top': '1rem' }}
                        onClick={() => setSignUp(false)}
                    > Click</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
