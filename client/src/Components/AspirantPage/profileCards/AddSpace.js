import React, { useState, useRef } from 'react'
import { Card, Button, Row, Form } from 'react-bootstrap'

function AddSpace({ setNewSpace }) {
    const [addSpace, setAddSpace] = useState(false)

    var add = () => {
        setAddSpace(false)
        // setNewState("")
        setNewSpace(spaceRef.current.value)
    }
    const spaceRef = useRef();
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Card.Text>ADD SPACE</Card.Text>
                    <Button onClick={() => setAddSpace(true)}>Add</Button>
                </Row>
            </Card.Header>
            {
                addSpace ? <Card.Body>
                    <Form>
                        <Form.Control as="select" ref={spaceRef}>
                            <option value="Academics">Academics</option>
                            <option value="WorkExperience">Work Experience</option>
                        </Form.Control>
                        <Button onClick={add}>DONE</Button>
                    </Form>
                </Card.Body> : null
            }
        </Card>
    )
}

export default AddSpace
