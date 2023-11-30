import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Question from "./pages/Question"
import Answer from "./pages/Answer"
import Layout from "./components/Layout"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="questions" element={<Question />} />
                    <Route path="answers" element={<Answer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}