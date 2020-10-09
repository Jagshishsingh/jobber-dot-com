import { Button } from '@material-ui/core';
import React from 'react';
import './LoginBtns.css'

function LoginBtns() {
    return (
        <div className="login_btns">
            <div className="">
                <h2>I am Employer</h2>
                <p>Hire stall with ease</p>
                <Button variant="contained" style={{'backgroundColor':'blue','color':'white'}}>Hire Now</Button>
            </div>

            <div className="">
                <h2>I am Candidate</h2>
                <p>1,09,000 job openings all over India</p>
                <Button variant="contained" style={{'backgroundColor':'blue','color':'white'}}>Get Job Now</Button>
            </div>
        </div>
    )
}

export default LoginBtns
