import React from "react"
import {decode} from "html-entities"

export default function Questions(props) {
    const options = decode(props.options)
    
    return (
        <div className="question">
            <h3>{decode(props.question)}</h3>
            <form id={props.id}>
                <input
                    type="radio"
                    id={options[0]}
                    name="option"
                    value={options[0]}
                    onChange={props.handleChange}
                    data-option={props.id}
                />
                <label htmlFor={options[0]}>{options[0]}</label>
                <input 
                    type="radio"
                    id={options[1]}
                    name="option"
                    value={options[1]}
                    onChange={props.handleChange}
                    data-option={props.id}
                />
                <label htmlFor={options[1]}>{options[1]}</label>
                <input
                    type="radio"
                    id={options[2]}
                    name="option"
                    value={options[2]}
                    onChange={props.handleChange}
                    data-option={props.id}
                />
                <label htmlFor={options[2]}>{options[2]}</label>
                <input
                    type="radio"
                    id={options[3]}
                    name="option"
                    value={options[3]}
                    onChange={props.handleChange}
                    data-option={props.id}
                />
                <label htmlFor={options[3]}>{options[3]}</label>
            </form>
        </div>
    )
}