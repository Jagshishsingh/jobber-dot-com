import { Button, Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom';


const useStyles = createUseStyles({
    root: { 
        height: '100%',
        width: '20%',
        background: 'red',
        display: 'flex',
        position: 'absolute',
    },
    sideNavButton: {    
        borderRadius: 0,
        backgroundColor: 'orange',
        width:'100%',
        
    }
})

function SideNavBar() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
                <Container >

                    <NavLink to="/aspirant" style={{ textDecoration: 'none' }}>
                    <Row><Button variant="primary" size="lg" block
                        className={styles.sideNavButton}>HOME</Button></Row>
                        </NavLink>
                    <NavLink to="/aspirant/profile" style={{ textDecoration: 'none' }}>
                    <Row><Button variant="primary" size="lg" block
                        className={styles.sideNavButton}>PROFILE</Button></Row>
                        </NavLink>
                </Container>

        </div>
    )
}

export default SideNavBar
