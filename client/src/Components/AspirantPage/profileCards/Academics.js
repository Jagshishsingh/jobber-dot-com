import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;


function Academics(props) {
    const [readOnly, setReadOnly] = useState(true) // to allow or stop editing in current card 
    const [academics, setAcademics] = useState(props.academics) // to make changes in current 
    //card data while editing

    // to handle changes while editing 
    const changeField = (e) => {
        setAcademics({
            ...academics,
            [e.target.name]: e.target.value
        })
    }

    // to handle state of readOnly as well as sending edited data to server
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
        setReadOnly(prevState => !prevState) // setting readOnly state

    }


    return (
        <Card bg="light" border="success">
            {/* ---------------------------ACADEMICS CARD---------------------------- */}

            <Card.Header>Academics</Card.Header>
            <Card.Body>
                {/* ---------------------------EDIT BUTTON---------------------------- */}
                <Button variant="success" className="float-right"
                    onClick={() => editButtonHandler()}
                >{readOnly ? 'EDIT' : 'DONE'}</Button>

                {/* ---------------------------ACADEMICS FIELD FORM---------------------------- */}

                <Form >
                    {/* Form groups to show different fields of academics */}
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
                {/* ------------X--------------ACADEMICS FIELD FORM--------------X------------- */}


            </Card.Body>
        </Card>
    )
}

export default Academics
