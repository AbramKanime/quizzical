import React from "react"

export default function Homepage(props) {
    const style = {
        height: "100vh"
    }
    return (
        <div className="homepage-container">
            <h1>Quizzical</h1>
            <button className="start-btn" onClick={props.callApi}>Start quiz</button>
        </div>
    )
}