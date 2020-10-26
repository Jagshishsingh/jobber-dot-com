import React, { useState,useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'

import { UserContext } from '../../common'


const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;
function Academics(props) {
    const [readOnly, setReadOnly] = useState(true) // to allow or stop editing in current card 
    const [academics, setAcademics] = useState(props.academics) // to make changes in current 

    const data = useContext(UserContext)


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
                url: `${SERVER_BASE_ADDRESS}/aspirant/${data.userName}/addInfo/academics`,
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
            <Card.Header>Academics</Card.Header>
            <Card.Body>
                <Button variant="success" className="float-right"
                    onClick={() => editButtonHandler()}
                >{readOnly ? 'EDIT' : 'DONE'}</Button>
                <Form >
                    {
                        Object.keys(academics).map((key) => (
                            <Form.Group>
                                <Form.Label>{key}</Form.Label>
                                <Form.Control value={academics[key]} name={key}
                                    onChange={(e) => changeField(e)}
                                    readOnly={readOnly}></Form.Control>
                            </Form.Group>
                        ))

                    }
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Academics
