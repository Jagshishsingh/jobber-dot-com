import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Form } from 'react-bootstrap'
import axios from 'axios'
import { SingleChoiceQuestion, MultipleChoiceQuestion } from '../common'

const SERVER_BASE_ADDRESS = process.env.SERVER_BASE_ADDRESS

function TestGet(props) {
    const [testFetched, setTestFetched] = useState(true) // true for development purposes
    var title = ""
    var companyName = ""
    var questions = []

    //---------------------FAKE DATA FOR DEVELOPMENT---------------------------//
    title = "First Test for web development"
    companyName = "Facebook"
    questions = [
        {
            question: "What is your name",
            questionType: "SingleChoiceQuestion",
            options: [
                "jai", "veeru", "gabbar", "samba"
            ],
            positiveMarks: 3,
            negativeMarks: 1,
        },
        {
            question: "Which animals do you have?",
            questionType: "MultipleChoiceQuestion",
            options: [
                "dog", "cat", "parrot", "goat"
            ],
            positiveMarks: 4,
            negativeMarks: 2,
        },
    ]






    //-----------X---------FAKE DATA FOR DEVELOPMENT--------------X------------//

    useEffect(() => {
        axios({
            method: "get",
            url: `${SERVER_BASE_ADDRESS}/test/fetch/${props._id}`,
        }).then((err, result) => {
            title = result.title;
            companyName = result.companyName;
            questions = result.questions
        }).then(() => setTestFetched(true));

    }, [])
    return (
        !testFetched ? <h1>FETCHING TEST</h1> :
            <Container>
                <Row>
                    {/* FOR FILTERS AND MARKERS AND QUESTION NAVIGATION */}
                    <Col style={{ backgroundColor: "red" }}></Col>


                    <Col xs={8}>
                        <Form>
                        {questions.map((question, index) => {
                            // for single choice qiestions
                            if (question.questionType.toLowerCase().startsWith("singlechoice")) {
                                return <SingleChoiceQuestion question={question} questionIndex = {index}></SingleChoiceQuestion>
                            }
                            // for multiple choice qiestions
                            if (question.questionType.toLowerCase().startsWith("multiplechoice")) {
                                return <MultipleChoiceQuestion question={question} questionIndex = {index}></MultipleChoiceQuestion>
                            }


                        })}
                        </Form>
                    </Col>

                </Row>
            </Container>
    )
}

export default TestGet
