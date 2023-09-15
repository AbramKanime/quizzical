import React from "react"

export default function Homepage({getQuestions}) {
    const style = {
        height: "100vh"
    }
    return (
        <div className="homepage-container">
            <h1>Quizzical</h1>
            <button className="start-btn" onClick={getQuestions}>Start quiz</button>
        </div>
    )
}