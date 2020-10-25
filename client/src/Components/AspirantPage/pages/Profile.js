import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Button, Card } from 'react-bootstrap'
import { NavBar, SideNavBar } from '../../common'
import axios from 'axios'
import { Academics, AddSpace, WorkExperience } from '../profileCards'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;
const userName = "aaa";
const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})


function Profile() {
    const styles = useStyles();
    const [newSpace, setNewSpace] = useState("")

    // this is fake data for developing purposes
    //---------------------------DEVELOPMENT DATA----------------------------------//
    var data = {
        _id: 11,
        name: "Jagshish",
        school: "aa",
        academics: [{
            _id: 1,
            degree: "B.tech.",
            college: "MNNIT"
        }, {
            _id: 2,
            degree: "ITI",
            college: "IITK"
        }]
    }
    //------------X--------------DEVELOPMENT DATA------------------X---------------//


    // this hook is to handle data fetching from server, about profile of aspirant
    useEffect(() => {
        axios({
            method: "get",
            url: `${SERVER_BASE_ADDRESS}/aspirant/info/${userName}`
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
                <h1 >PROFILE</h1>
                {/* field for adding a new space */}
                <AddSpace setNewSpace={setNewSpace}></AddSpace>//

                {/* all academics related cards  */}
                {
                    data.academics.map((element) =>
                        (<Academics key={element._id} academics={element} />)
                    )
                }
                

            </div>


        </div>
    )
}

export default Profile
