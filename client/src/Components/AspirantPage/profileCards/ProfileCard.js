import axios from 'axios'
import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap'

import { UserContext } from '../../common'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS;


function ProfileCard(props) {
    const [readOnly, setReadOnly] = useState(true) // to allow or stop editing in current card 
    const [element, setElement] = useState(props.element) // to make changes in current 

    const userContextData = useContext(UserContext)


    const changeField = (e) => {
        setElement({
            ...element,
            [e.target.name]: e.target.value
        })
    }
    const editButtonHandler = () => {
        if (!readOnly) {
            axios({
                method: 'post',
                url: `${SERVER_BASE_ADDRESS}/aspirant/
                ${userContextData.userName}/addInfo/${props.elementType}`,
                data: element
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
            <Card.Header>{props.elementType}</Card.Header>
            <Card.Body>
                <Button variant="success" className="float-right"
                    onClick={() => editButtonHandler()}
                >{readOnly ? 'EDIT' : 'DONE'}</Button>
                <Form >
                    {
                        Object.keys(element).map((key) => (
                            <Form.Group>
                                <Form.Label>{key}</Form.Label>
                                <Form.Control value={element[key]} name={key}
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

export default ProfileCard
