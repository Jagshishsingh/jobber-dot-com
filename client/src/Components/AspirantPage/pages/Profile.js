import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import { NavBar, SideNavBar, UserContext } from '../../common'
import { Academics, AddSpace, WorkExperience } from '../profileCards'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;
const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})


function Profile() {
    const styles = useStyles();
    const [newSpace, setNewSpace] = useState("")
    var data = useContext(UserContext);

    var data = {
        _id: 11,
        name: "Jagshish",
        userName:"singhJagshish",
        academics: [
            {
              instituteName: "MNNIT",
              degree: "b.tech."
            },
            {
              instituteName: "IITK",
              degree: "msc"
            }
          ]
    }
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
            <NavBar />
            <SideNavBar />
            <div className={styles.body}>
                <h1 >PROFILE</h1>
                <AddSpace setNewSpace={setNewSpace}></AddSpace>
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
