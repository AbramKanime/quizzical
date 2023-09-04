import React from "react"

export default function Answers(props) {
    const options = props.options
    const itemObject = props.itemObject
    function correctAnsColor(option) {
        return option === itemObject.correctAnswer ? {background: "#94D7A2"}
            : option === itemObject.selectedAnswer && option !== itemObject.correctAnswer ? {background: "#F8BCBC"}
            : {background: ""}
    }
    
    return (
        <div className="question">
            <h3>{props.question}</h3>
            <form id={props.id}>
                <input
                    type="radio"
                    id={options[0]}
                    name="option"
                    value={options[0]}
                />
                <label htmlFor={options[0]} style={correctAnsColor(options[0])}>{options[0]}</label>
                <input 
                    type="radio"
                    id={options[1]}
                    name="option"
                    value={options[1]}
                />
                <label htmlFor={options[1]} style={correctAnsColor(options[1])}>{options[1]}</label>
                <input
                    type="radio"
                    id={options[2]}
                    name="option"
                    value={options[2]}
                />
                <label htmlFor={options[2]} style={correctAnsColor(options[2])}>{options[2]}</label>
                <input
                    type="radio"
                    id={options[3]}
                    name="option"
                    value={options[3]}
                />
                <label htmlFor={options[3]} style={correctAnsColor(options[3])}>{options[3]}</label>
            </form>
        </div>
    )
}
