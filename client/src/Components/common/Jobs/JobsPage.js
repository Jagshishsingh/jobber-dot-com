import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

import { UserContext } from '..'
import { Job } from './common'
import JobAdd from './JobAdd'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS

const useStyles = createUseStyles({
    body: {
        marginLeft: '20%',
        backgroundColor: 'pink',
        padding: '5%'
    }

})

function JobsPage(props) {
    const userData = useContext(UserContext)

    const styles = useStyles();
    const [jobDone, setJobDone] = useState(false)
    var initialStateNewJob = {
        title: "",
        salary: null,
    }
    const [newJob, setNewJob] = useState(initialStateNewJob)
    var fakeData = [{
        title: "Web",
        salary: 5000,
        companyName: userData.companyName
    },
    {
        title: "App",
        salary: 7000,
        companyName: userData.companyName
    },
    ]
    const [data, setData] = useState(fakeData)


    useEffect(() => {
        if (!jobDone){
            return;
        }
        axios({
            method: "post",
            url: `${SERVER_BASE_ADDRESS}/company/jobs/add`,
            data: newJob
        }).then((err, res) => {
            if (err) {
                return;
            }
            data = res;
        })
                 // it would be in above promise once server is working
      
        // setNewJob({...newJob,companyName:userData.companyName})
        console.log(data)
        const tempData = data.concat([newJob])
        setData(tempData);
        console.log(data)
        setNewJob(initialStateNewJob)
        setJobDone(false)

    }, [jobDone])

    useEffect(() => {
        axios({
            method: "post",
            url: `${SERVER_BASE_ADDRESS}/company/jobs`,
            data: {
                filters: props.filters
            }
        }).then((err, res) => {
            if (err) {
                return;
            }
           
        })

    }, [])
    return (
        <div>

            <Container className={styles.body}>
                {
                    props.companySide ? 
                    <JobAdd jobDone = {jobDone} setJobDone={setJobDone} 
                    newJob={newJob} setNewJob={setNewJob}/> : null
                }
                {
                    data.map(item => {
                        return <Job data={item} />
                    })
                }
            </Container>

        </div>
    )
}

export default JobsPage
