import React from 'react'
import { Form, Row } from 'react-bootstrap'

function MultipleChoiceQuestion({ question, questionIndex }) {
    return (
        <Row variant="danger">
            <Form.Group >
                <Form.Label>{question.question}</Form.Label>

                {/* question options as checkbox buttons */}
                {question.options.map((option, index) => (
                    <Form.Check type="checkbox" label={option} id={`questionRadios${index + 1}`}></Form.Check>
                ))}
            </Form.Group>
        </Row>
    )
}

export default MultipleChoiceQuestion
