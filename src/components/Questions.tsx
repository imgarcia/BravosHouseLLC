import { data } from '../data/data'

export const Questions = () => {
  const questionCategories = Object.keys(data)
  console.log('getQuestionsCategories is: ', questionCategories)

  const questions = data.exterior

  // const { exterior } = data

  const handleNextQuestion = () => {}

  return (
    <div className="box questions-wrapper">
      <h1>Questionnaire</h1>

      <>
        {questions.map((q, i) => {
          return (
            <div className="question-wrapper">
              <h3>
                {`${i + 1}.`} {q?.question}
              </h3>
              <input type="text" value={''} onChange={() => {}} />
            </div>
          )
        })}
        <button onClick={handleNextQuestion}>Next</button>
      </>
    </div>
  )
}
