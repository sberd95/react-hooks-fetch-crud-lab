import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQuestion, handleEditQuestion}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
      <QuestionItem 
      question={question} 
      key={question.id} 
      handleDeleteQuestion={handleDeleteQuestion} 
      handleEditQuestion={handleEditQuestion}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
