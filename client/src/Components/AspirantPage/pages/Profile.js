import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import { NavBar, SideNavBar, UserContext } from '../../common'
import { AddSpace, ProfileCard } from '../profileCards'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;
const useStyles = createUseStyles({
    body: {
        marginLeft: '20%'
    }
})


function Profile() {

    //----------------------INITIAL STATES---------------------------- //
    var initialStateAcademics = {
        // startDate: "",
        // endDate: "",
        // grade: "",
        instituteName: "",
        degree: "",
        // fieldOfStudy: "",
        // achievementLink: "",
        // affiliation: ""
    }

    var initialStateWorkExperience = {
        // startDate: "",
        // endDate: "",
        jobTitle: "",
        // currentlyWorking:"",
        company: "",
        // Role:"",
        // achievementLink:"",
    }
    var initialStates = {
        initialStateAcademics: initialStateAcademics,
        initialStateWorkExperience: initialStateWorkExperience
    }
    //----------X-----------INITIAL STATES---------------X------------ //

    const styles = useStyles();
    const [newSpace, setNewSpace] = useState("academics")
    const [newData, setNewData] = useState({})

    var userContextData = useContext(UserContext);

    //----------------------FAKE DATA--------------------------- //

    var fakeData = {
        _id: 11,
        name: "Jagshish",
        userName: "singhJagshish",
        academics: [
            {
                instituteName: "MNNIT",
                degree: "b.tech."
            },
            {
                instituteName: "IITK",
                degree: "msc"
            }
        ],
        workExperience: [
            {
                jobTitle: "web developer",
                company: "Facebook",
            },
            {
                jobTitle: "manager",
                company: "apple",
            }
        ]
    }
    const [data, setData] = useState(fakeData)
    //----------X-----------FAKE DATA---------------X------------ //



    useEffect(() => {
        axios({
            method: "get",
            url: `${SERVER_BASE_ADDRESS}/aspirant/info/${userContextData.userName}`
        }).then((error, response) => {
            if (error) {
                return;
            }
            data = response
        })

    }, [])

    var sendNewData = () => {
        axios({
            method: "post",
            url: `${SERVER_BASE_ADDRESS}/aspirant/${userContextData.userName}/updateInfo/${newSpace}`,
            data: newData
        }).then((err, result) => {
            if (err) {
                return;
            }
            const tempData = data[newSpace].concat([newData])
            setData({ ...data, [`${newSpace}`]: tempData })
            setNewData({});
        })
        // until when server is not working
        const tempData = data[newSpace].concat([newData])
        setData({ ...data, [`${newSpace}`]: tempData })
        setNewData({});
    }

    return (
        <div>
            <NavBar />
            <SideNavBar />
            <div className={styles.body}>
                <h1 >PROFILE</h1>
                <AddSpace setNewSpace={setNewSpace}
                    newSpace={newSpace}
                    setNewSpace={setNewSpace}
                    initialStates={initialStates}
                    data={newData}
                    setData={setNewData}
                    sendNewData={sendNewData}
                ></AddSpace>
                {
                    Object.keys(data).map(key => {
                        if (Array.isArray(data[key])) {
                            return data[key].map(element => (
                                <ProfileCard key={element._id} elementType={key} element={element} />
                            ))
                        }
                    })

                }


            </div>


        </div>
    )
}

export default Profile
