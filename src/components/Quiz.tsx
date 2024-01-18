import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import questionnaire from '../data/data.json'

export const Quiz = () => {
  const currentYear = new Date().getFullYear()

  const { questions } = questionnaire

  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')

  const showScore = currentQuestion + 1 > questions.length
  const isLastQuestion = currentQuestion + 1 > questions.length

  const handleNextQuestion = () => {
    setAnswer('')
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1)
      answer.toLowerCase() ===
        questions[currentQuestion].answer.toLowerCase() && setScore(score + 1)
    } else {
      answer.toLowerCase() ===
        questions[currentQuestion].answer.toLowerCase() && setScore(score + 1)
    }
  }

  return (
    <div className="app-wrapper">
      <header>
        <Link to="/">
          <img
            src="../bravoshousellc-logo.png"
            className="app-logo"
            alt="Bravos House LLC Logo"
          />
        </Link>
      </header>
      <div className="app-body">
        <div className="box questions-wrapper">
          <h1>Questionnaire</h1>
          {showScore ? (
            <>
              <h3>Complete</h3>
              <div className="score">{`Score: ${score} / ${questions.length}`}</div>
              <h4>{((score / questions.length) * 100).toFixed()}%</h4>
              <button
                onClick={() => {
                  setScore(0)
                  setCurrentQuestion(0)
                  setAnswer('')
                }}
              >
                Start Over
              </button>
            </>
          ) : (
            <>
              <h3>
                {`${currentQuestion + 1}.`}{' '}
                {questions[currentQuestion].question}
              </h3>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div className="buttons-wrapper">
                <button className="" onClick={handleNextQuestion}>
                  Next
                </button>
                <button
                  onClick={() => {
                    setScore(0)
                    setCurrentQuestion(0)
                    setAnswer('')
                  }}
                >
                  Start Over
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <footer>&copy; {currentYear} Bravos House, LLC</footer>
    </div>
  )
}
