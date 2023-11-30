import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Questions from "../components/Questions"
import { QuestionContext } from "../components/Layout"
import { decode } from "html-entities"
import { nanoid } from "nanoid"

export default function Question() {
    const [loading, setLoading] = useState(false)
    const {question, setQuestion} = React.useContext(QuestionContext)

    useEffect(() => {
        setLoading(true)
        fetch(`https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`)
        .then(res => res.json())
        .then(data => {
            const questions = []
            for (let result of data.results) {
                // Sets up the object that contains the questions and answer options
                const quest = {
                    question: decode(result.question),
                    correctAnswer: decode(result.correct_answer),
                    answers: result.incorrect_answers,
                    selectedAnswer: "",
                    id: nanoid()
                }
                quest.answers.push(result.correct_answer)
                // Sets up ansArray to shuffle the answer options
                const ansArray = quest.answers
                const decodeAnsArray = ansArray.map(answer => decode(answer))
                // This ensures that the correct answer is not always at the last option
                const shuffleArray = decodeAnsArray.sort((a, b) => 0.5 - Math.random())
                quest.answers = shuffleArray
                questions.push(quest)
            }
            setQuestion(questions)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    function handleChange(e) {
        const id = e.target.dataset.option
        const answer = e.target.value
        for (let item of question){
            if (item.id === id) {
                item.selectedAnswer = answer
            }
        }
    }

    const questionHtml = question ? question.map(item => {
        return <Questions
            question={item.question}
            options={item.answers}
            key={item.id}
            handleChange={handleChange}
            id={item.id}
        />
    }) : "Loading questions..."

    if (loading) {
        return (
            <main>
                <h3>Loading questions...</h3>
            </main>
        )
    }

    return (
        <main>
            {questionHtml}
            <Link to="/answers" className="button check-ans-btn">Check answers</Link>
        </main>
    )
}