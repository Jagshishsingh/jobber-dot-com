import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;


function Academics(props) {
    const [readOnly, setReadOnly] = useState(true)
    const [academics, setAcademics] = useState(props.academics)
    const changeField = (e) => {
        setAcademics({
            ...academics,
            [e.target.name]: e.target.value
        })
    }
    const editButtonHandler = () => {
        if (!readOnly) {
            axios({
                method: 'post',
                url: `${SERVER_BASE_ADDRESS}/aspirant/addInfo`,
                data: academics
            }).then((err) => {
                if (err) {
                    return;
                }
            })
        }
        setReadOnly(prevState => !prevState)

    }
    return (
        <Card bg="light" border="success">
            <Card.Header>Academics</Card.Header>
            <Card.Body>
                <Button variant="success" className="float-right"
                    onClick={() => editButtonHandler()}
                >{readOnly ? 'EDIT' : 'DONE'}</Button>
                <Form >
                    {

                    }
                    <Form.Group>
                        <Form.Label>College</Form.Label>
                        <Form.Control value={academics.college} name="college"
                            onChange={(e) => changeField(e)}
                            readOnly={readOnly}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Degree</Form.Label>
                        <Form.Control placeholder={academics.degree}
                            readOnly={readOnly}></Form.Control>
                    </Form.Group>



                </Form>

            </Card.Body>
        </Card>
    )
}

export default Academics
