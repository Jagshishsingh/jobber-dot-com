import React from 'react';
import { Avatar, Badge, Button, IconButton } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import './HomeNavBar.css';

function HomeNavbar() {
    return (
        <div className="navBar">
            <div className="navLeft">
                <img className="logo" src="data:image/jpeg;base64,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"></img>
                <span>S.H.I.E.L.D</span>
            </div>
            <div className="navRight">
                <Button variant="outlined" color="primary" style={{'padding':'0.5rem 2rem','marginTop':'1px'}}>Login</Button>

            </div>
        </div>


    )
}

export default HomeNavbar
