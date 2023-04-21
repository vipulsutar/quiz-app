import React, { useState } from "react";
import questions from "./Data"

function App() {
  const[currentIndex , setcurrentIndex] = useState(0);

  function handleclick(isCorrect){
    if(isCorrect){
      setscore((score)=>score + 1);
    }
    if(currentIndex + 1 === questions.length){
      setquizfinished(true)
    }else{
      setcurrentIndex((value)=>value + 1)
    }
  }

  const[quizfinished,setquizfinished] = useState(false)

  const[score,setscore] = useState(0);
  return (
    <div className="app">
      {quizfinished ? (
      <div className="score-section">
        you scored {score} out of {questions.length}
      </div>):(
        <>
      <div className="question-section">
        <div className="question-count">
          <span>Q uestion {1+currentIndex}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentIndex].questionText}
        </div>
      
        <div className="answer-section">
          {questions[currentIndex].answerOptions.map((answer)=>{
            return (
              <button
               onClick={()=>handleclick(answer.isCorrect)} 
               key={answer.answerText}>
                {answer.answerText}
              </button>
            )
          })}
        </div>
      </div>
      </>
  )
}
    </div>
  )
}

export default App;
