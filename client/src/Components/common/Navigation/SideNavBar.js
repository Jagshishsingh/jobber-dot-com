import { Button, Container, Row } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom';
import { NavContext } from '../UserContext'


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
        width: '100%',

    }
})

function SideNavBar() {
    const styles = useStyles();
    const navData = useContext(NavContext)
    return (
        <div className={styles.root}>
            <Container >
                {
                    navData.map((element, index) => 
                        (<NavLink to={element.link} style={{ textDecoration: 'none' }}>
                            <Row><Button variant="primary" size="lg" block
                                className={styles.sideNavButton}>{element.title}</Button></Row>
                        </NavLink>)
                    )
                }
            </Container>

        </div>
    )
}

export default SideNavBar
