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
    var initialStateNewJob = {
        title: "",
        salary: null,
    }

    const styles = useStyles();
    const [jobDone, setJobDone] = useState(false)   
    const [newJob, setNewJob] = useState(initialStateNewJob)   
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
        const tempData = data.concat([newJob])
        setData(tempData);
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
                    newJob={newJob} setNewJob={setNewJob}
                    initialStateNewJob={initialStateNewJob}/> : null
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
