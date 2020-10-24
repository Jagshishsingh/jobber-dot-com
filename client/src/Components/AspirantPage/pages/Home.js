import React from 'react'
import { createUseStyles } from 'react-jss'
import { Container, Row } from 'react-bootstrap'
import { NavBar, SideNavBar } from '../common'

const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})

function Home() {
    const styles = useStyles();

   

    return (
        <div>
            <NavBar />
            <SideNavBar />
            <div className={styles.body}>
                <h1 >HOME</h1>
            </div>


        </div>
    )
}

export default Home
