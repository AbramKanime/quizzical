import React from "react"
import Homepage from "./components/Homepage"
import Questions from "./components/Questions"
import Answers from "./components/Answers"
import {nanoid} from "nanoid"
import {decode} from "html-entities"

export default function App() {
    const [question, setQuestion] = React.useState("")
    const [isHomepage, setIsHomepage] = React.useState(true)
    const [isQuestion, setIsQuestion] = React.useState(true)
    const [answerElements, setAnswerElements] = React.useState("")
    const [questionElements, setQuestionElements] = React.useState("")
    const [scores, setScores] = React.useState(0)
    
    function callApi() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                const questions = []
                for (let result of data.results) {
                    const question = {
                        question: decode(result.question),
                        correctAnswer: decode(result.correct_answer),
                        answers: decode(result.incorrect_answers),
                        selectedAnswer: "",
                        id: nanoid()
                        }
                    question.answers.push(result.correct_answer)
                    const ansArray = question.answers
                    const shuffleArray = ansArray.sort((a, b) => 0.5 - Math.random())
                    question.answers = shuffleArray
                    questions.push(question)
                }
                setQuestion(questions)
                if (isHomepage){
                    setIsHomepage(false)
                }
            })
    }
    
    function handleChange(e) {
        const id = e.target.dataset.option
        const answer = e.target.value
        for (let item of question){
            if (item.id === id) {
                item.selectedAnswer = answer
            }
        }
    }
    
    React.useEffect(() => {
        if (question) {
            const questionHtml = question.map(item => {
                return <Questions
                    question={item.question}
                    options={item.answers}
                    key={item.id}
                    handleChange={handleChange}
                    id={item.id}
                />
            })
            setQuestionElements(questionHtml)
        }
    }, [question])
    
    function calculateScores() {
        let number = 0
        for (let item of question) {
            if (item.selectedAnswer === item.correctAnswer) {
                number += 1
            }
        }
        setScores(number)
    }
    
    function checkAnswers() {
        const answerHtml = question.map(item => {
            return <Answers
                itemObject={item}
                question={item.question}
                options={item.answers}
                key={item.id}
            />

        })
        setIsQuestion(false)
        setAnswerElements(answerHtml)
    }
    
    React.useEffect(() => {
        calculateScores()
    }, [answerElements])
    
    function reset() {
        callApi()
        setIsQuestion(true)
    }
    
    const style = {
        height: "100vh"
    }
    
    const style2 = {
        height: "100%"
    }
    
    function renderJsx() {
        let html
        if (isQuestion){
            html = questionElements
        } else {
            html = answerElements
        }
        return html
    }
    
    return (
        <main style={isHomepage ? style : style2}>
            {isHomepage && <Homepage callApi={callApi} />}
            question ? {renderJsx()} : <h1>Loading...</h1>
            {!isHomepage && isQuestion && <button className="check-ans-btn" onClick={checkAnswers}>Check answers</button>}
            <div className="scores-msg-container">
                {!isHomepage && !isQuestion && <p>You scored {scores}/5 correct answers</p>}
                {!isHomepage && !isQuestion && <button className="reset-btn" onClick={reset}>Play again</button>}
            </div>
        </main>
    )
}