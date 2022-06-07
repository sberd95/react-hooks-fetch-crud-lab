import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(arr => setQuestions(arr))
  }, [])

  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion){
    setQuestions(questions.filter(question => (question.id !== deletedQuestion.id)))
  }

  function handleEditQuestion(editedQuestion){
    setQuestions(questions.map(question => {
      if (question.id !== editedQuestion.id) return question
      return {...question, 'correctIndex':editedQuestion.correctIndex}
    }))
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion}/> : 
      <QuestionList handleDeleteQuestion={handleDeleteQuestion} handleEditQuestion={handleEditQuestion} questions={questions}/>}
    </main>
  );
}

export default App;
