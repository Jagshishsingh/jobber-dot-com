import React from 'react'
import { Form, Row } from 'react-bootstrap'

function SingleChoiceQuestion({ question,questionIndex }) {
    return (
        <Row variant="danger">
            <Form.Group >
                <Form.Label>{question.question}</Form.Label>

                {/* question options as radio buttons */}
                {question.options.map((option, index) => (
                    <Form.Check type="radio" label={option} name={`questionNo${questionIndex}`} id={`questionRadios${index+1}`}></Form.Check>
                ))}
            </Form.Group>
        </Row>
    )
}

export default SingleChoiceQuestion
