

export default function calculateScores(question) {
    let number = 0
    for (let item of question) {
        if (item.selectedAnswer === item.correctAnswer) {
            number += 1
        }
    }
    
    return number
}