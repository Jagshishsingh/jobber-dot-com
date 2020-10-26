import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS
const userName = "aaa";


function Job({ data }) {
    // state to check applied for job or not
    const [applied, setApplied] = useState(false)

    // handler to apply for current job, passing userName of aspirant to company's database
    const applyHandler = () => {
        axios({
            method: "post",
            url: `${SERVER_BASE_ADDRESS}/company/${data.companyName}/sendUserDataToSpecificJob`,
            data: {
                //userData we can also match users skill and required skills
                aspirantName: userName
            }
        }).then((err, result) => {
            // if (err){
            //     console.log(err);
            // }

        })
        setApplied(prevState => !prevState)
        console.log("applied: ", applied)

    }
    return (
        <Card>
            <Card.Header>{data.companyName}</Card.Header>
            <Card.Body>
                {/* --------------------JOB-RELATED INFO ---------------------- */}
                <Card.Title as="h6">{data.title}</Card.Title>
                <Card.Text as="h6">Salary: {data.salary}</Card.Text>

                {/* --------------------JOB-APPLY BUTTON ---------------------- */}
                <Button disabled={applied} onClick={applyHandler}>{!applied ? `Apply` : `Applied`}</Button>
            </Card.Body>
        </Card>
    )
}

export default Job
