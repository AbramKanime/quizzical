import React, { useState } from "react"
import { Outlet } from "react-router-dom"

const QuestionContext = React.createContext()

export default function Layout() {
    const [question, setQuestion] = useState(null)
    return (
        <QuestionContext.Provider value={{question, setQuestion}}>
            <Outlet />
        </QuestionContext.Provider>
    )
}

export {QuestionContext}