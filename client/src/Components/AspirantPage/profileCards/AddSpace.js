import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'

function AddSpace({ newSpace, setNewSpace, initialStates, data, setData, sendNewData }) {
    const [addSpace, setAddSpace] = useState(false)
    const [fillSpace, setFillSpace] = useState(false)

    var add = () => {
        // setAddSpace(false)
        switch (newSpace) {
            case "academics": {
                setData(initialStates.initialStateAcademics);
                break
            }
            case "workExperience": {
                setData(initialStates.initialStateWorkExperience);
                break
            }
            default:
                break
        }
        setFillSpace(true);
    }

    var mainAddButtonHandler = () => {
        if (addSpace === true) {
            setAddSpace(false);
            setFillSpace(false);
            setData({});
            return;
        }
        setAddSpace(true)
    }
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Card.Text>ADD SPACE</Card.Text>
                    {/* button to add new space  */}
                    <Button onClick={() => mainAddButtonHandler()}>{addSpace ? "CANCEL" : "ADD"}</Button>
                </Row>
            </Card.Header>

            { addSpace ? <Card.Body>
                <Form>
                    <Form.Control as="select" onChange={(e) => setNewSpace(e.target.value)}>
                        <option value="academics">Academics</option>
                        <option value="workExperience">Work Experience</option>
                    </Form.Control>
                    <Button onClick={add}>DONE</Button>
                </Form>
            </Card.Body> : null}

            {/* -------------------------FOR NEW SPACE DATA--------------------------- */}
            {
                fillSpace ? <Card.Body>
                    <Form>
                        {
                            Object.keys(data).map(key => (
                                <Form.Group>
                                    <Form.Label>{key}</Form.Label>
                                    <Form.Control name={key}
                                        onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
                                </Form.Group>
                            ))
                        }
                        <Button onClick={() => { setFillSpace(false); setAddSpace(false); sendNewData() }}>DONE</Button>
                    </Form>
                </Card.Body> : null
            }
        </Card>
    )
}
export default AddSpace
