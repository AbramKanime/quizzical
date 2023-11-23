import React from "react"
import {Link} from "react-router-dom"

export default function Homepage() {
    return (
        <main>
            <div className="homepage-container">
                <h1>Quizzical</h1>
                <Link to="questions" className="button start-btn">Start quiz </Link>
            </div>
        </main>
    )
}