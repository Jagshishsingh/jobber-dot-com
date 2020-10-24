import React,{useState,useEffect} from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS



function Job({ data }) {
    const [applied, setApplied] = useState(false)
    useEffect(() => {
        axios({
            method:"post",
            url: `${SERVER_BASE_ADDRESS}/company/${data.companyName}/sendUserDataToSpecificJob`,
            data:{
                //userData we can also match users skill and required skills
            }
        })
    }, [applied])
    return (
        <Card>
            <Card.Header>{data.companyName}</Card.Header>
            <Card.Body>
                <Card.Title as="h6">{data.title}</Card.Title>
                <Card.Text as="h6">Salary: {data.salary}</Card.Text>
                <Button>Apply</Button>
            </Card.Body>
        </Card>
    )
}

export default Job
