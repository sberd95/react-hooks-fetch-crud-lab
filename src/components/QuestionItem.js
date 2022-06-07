import React from "react";

function QuestionItem({ question, handleDeleteQuestion, handleEditQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onClickDeleteQuestion(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'DELETE',
    })
    .then(r => r.json())
    .then(() => handleDeleteQuestion(question)
    )
  }

  function onChangeEditQuestion(e){
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'PATCH',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({"correctIndex": parseInt(e.target.value)})
    })
    .then(r => r.json())
    .then(obj => handleEditQuestion(obj))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onChangeEditQuestion} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onClickDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
