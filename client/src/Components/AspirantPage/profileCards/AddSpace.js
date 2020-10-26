import React, { useRef, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'

function AddSpace({ setNewSpace }) { // setNewSpace is used to set whether to make a new field
    // or now and which field (academics/workExperience/Project etc) to make

    // addSpace is used to open the selector field regarding new space
    const [addSpace, setAddSpace] = useState(false)

    var add = () => {
        setAddSpace(false)
        setNewSpace(spaceRef.current.value)
    }
    const spaceRef = useRef();
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Card.Text>ADD SPACE</Card.Text>
                    {/* button to add new space  */}
                    <Button onClick={() => setAddSpace(true)}>Add</Button>
                </Row>
            </Card.Header>
            {/* HERE if addSpace is true, means button for adding a new space is clicked,
            then card body carring important info about new space is shown */}
            {
                addSpace ? <Card.Body>
                    <Form>
                        {/* select one field to add new space */}
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
