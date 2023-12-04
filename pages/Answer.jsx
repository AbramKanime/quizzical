import React from "react"
import { Link } from "react-router-dom"
import Answers from "../components/Answers"
import { QuestionContext } from "../components/Layout"
import { calculateScores } from "../utils/utilityfunctions"

export default function Answer() {
    const {question} = React.useContext(QuestionContext)

    const answerHtml = question.map(item => {
        return <Answers
            itemObject={item}
            question={item.question}
            options={item.answers}
            key={item.id}
        />

    })

    return (
        <main>
            {answerHtml}
            <div className="scores-msg-container">
                <p>You scored {calculateScores(question)}/5 correct answers</p>
                <div className="answer-pg-links">
                    <Link to="/questions" className="button reset-btn">Play again</Link>
                    <Link to="/" className="button reset-btn">Back to dashboard</Link>
                </div>
            </div>
        </main>
    )
}