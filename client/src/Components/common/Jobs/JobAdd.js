import React, { useRef, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'

function JobAdd({ setJobDone, setNewJob, newJob, initialStateNewJob }) {
    const [addJob, setAddJob] = useState(false)

    const newJobAddHandler = (e) => {
        setNewJob({ ...newJob, [e.target.name]: e.target.value })
    }
    var mainAddButtonHandler = () => {
        if (addJob === true) {
            setJobDone(false);
            setAddJob(false);
            setNewJob(initialStateNewJob);
            return;
        }
        setAddJob(true)
    }
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Card.Text>ADD JOB</Card.Text>
                    <Button onClick={() => mainAddButtonHandler()}>{addJob ? "CANCEL" : "ADD"}</Button>

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
                        <Button onClick={() => { setAddJob(false); setJobDone(true) }}>DONE</Button>
                    </Form>
                </Card.Body> : null
            }
        </Card>
    )
}

export default JobAdd
