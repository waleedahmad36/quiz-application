import React, { useState } from "react";

import {
  cplusplusQuestions,
  javaQuestions,
  javascriptQuestions,
  pythonQuestions,
  typescriptQuestions,
} from "./utils/data";
import Quiz from "./components/Quiz";
import CategorySelector from "./components/CategorySelector";
import SubmitName from "./components/SubmitName";
import Footer from "./components/Footer";

function App() {
  const [userName, setUserName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Boy'); // Default selected option
  const [customImageUrl, setCustomImageUrl] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

 

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setNameSubmitted(true);
    console.log(customImageUrl)
  };

  let questions;
  switch (selectedCategory) {
    case "javascript":
      questions = javascriptQuestions;
      break;
    case "python":
      questions = pythonQuestions;
      break;
    case "typescript":
      questions = typescriptQuestions;
      break;
    case "cplusplus":
      questions = cplusplusQuestions;
      break;
    case "java":
      questions = javaQuestions;
      break;
    default:
      questions = [];
  }

  return (
    <div className="App">
      {!nameSubmitted ? (
        <SubmitName  handleNameSubmit={handleNameSubmit} userName={userName} setUserName={setUserName}
        selectedOption={selectedOption}  setSelectedOption={setSelectedOption} customImageUrl={customImageUrl} 
        setCustomImageUrl={setCustomImageUrl}   />
      ) : selectedCategory ? (
        <Quiz questions={questions} userName={userName}  customImageUrl={customImageUrl} selectedOption={selectedOption} selectedCategory={selectedCategory}  />
      ) : (
        <CategorySelector onSelectCategory={handleSelectCategory} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
