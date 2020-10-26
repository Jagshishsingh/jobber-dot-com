import React, { useRef, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'

function JobAdd({ setJobDone, setNewJob, newJob }) {
    const [addJob, setAddJob] = useState(false)

    const newJobAddHandler = (e) => {
        setNewJob({ ...newJob, [e.target.name]: e.target.value })
    }
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Card.Text>ADD JOB</Card.Text>
                    <Button onClick={() => setAddJob(true)}>Add</Button>
                </Row>
            </Card.Header>
            {
                addJob ? <Card.Body>
                    <Form>
                        {
                            Object.keys(newJob).map(key => (
                                <Form.Group>
                                    <Form.Label>{key}</Form.Label>
                                    <Form.Control name={key} onChange={(e) => newJobAddHandler(e)} />
                                </Form.Group>
                            ))
                        }
                        <Button onClick={() => {setAddJob(false);setJobDone(true)}}>DONE</Button>
                        {/* <Form.Control as="select" onChange={(e) => console.log(e.target.value)}>
                            <option value="Academics">Academics</option>
                            <option value="WorkExperience">Work Experience</option>
                        </Form.Control> */}

                    </Form>
                </Card.Body> : null
            }
        </Card>
    )
}

export default JobAdd
