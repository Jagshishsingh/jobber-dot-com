import React, { useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { Container, Row } from 'react-bootstrap'
import { NavBar, SideNavBar, UserContext } from '../../common'
import axios from 'axios'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;

const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})


function Home() {
    const styles = useStyles();
    const data = useContext(UserContext)
    console.log(data)


    useEffect(() => {
        axios({
            method: "get",
            url: `${SERVER_BASE_ADDRESS}/aspirant/info/${data.userName}`
        }).then((error, response) => {
            if (error) {
                return;
            }
            data = response
        })

    }, [])

    return (
        <div>
            {/* ----------------------------NAVBAR------------------------- */}
            <NavBar />

            {/* ----------------------------SIDEBAR------------------------- */}

            <SideNavBar />

            {/* ----------------------------BODY------------------------- */}

            <div className={styles.body}>
                <h1 >HOME</h1>
                {/* <h1 >{data.name}</h1> */}
                {Object.keys(data).map(key => (
                    <h1>{key}: {data[key]}</h1>)
                )}
            </div>


        </div>
    )
}

export default Home
