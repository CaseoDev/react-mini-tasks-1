import "./App.css";
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const quizData = [
    {
      question: "Capital City of Germany",
      answer1: "Berlin",
      answer2: "Paris",
      answer3: "London",
      answer4: "Hamburg",
      correct: "Berlin",
    },
    {
      question: "Fastest Animal on Earth",
      answer1: "Lion",
      answer2: "Cheetah",
      answer3: "Elephant",
      answer4: "Giraffe",
      correct: "Cheetah",
    },
    {
      question: "Highest Mountain in India",
      answer1: "Zugspitze",
      answer2: "Kangchenjunga",
      answer3: "Nanda Devi",
      answer4: "Jongson Peak",
      correct: "Kangchenjunga",
    },
    {
      question: "Longest River in New Zealand",
      answer1: "Nelson",
      answer2: "Mackenzie",
      answer3: "Waikato",
      answer4: "Tongariro",
      correct: "Waikato",
    },
  ];

  const [qNum, setQNum] = useState(1);

  const question = quizData[qNum - 1].question;
  const answer1 = quizData[qNum - 1].answer1;
  const answer2 = quizData[qNum - 1].answer2;
  const answer3 = quizData[qNum - 1].answer3;
  const answer4 = quizData[qNum - 1].answer4;
  const questionId1 = quizData[qNum - 1].toString() + "-1";
  const questionId2 = quizData[qNum - 1].toString() + "-2";
  const questionId3 = quizData[qNum - 1].toString() + "-3";
  const questionId4 = quizData[qNum - 1].toString() + "-4";

  const HandleControls = () => {
    if (qNum == 1) {
      return <button onClick={() => setQNum(qNum + 1)}>Next Page</button>;
    } else if (qNum >= 2 && qNum < quizData.length) {
      return (
        <>
          <button onClick={() => setQNum(qNum + 1)}>Next page</button>
          <button onClick={() => setQNum(qNum - 1)}>Previous page</button>
        </>
      );
    } else {
      return <button onClick={() => setQNum(qNum - 1)}>Previous page</button>;
    }
  };

  return (
    <div className="App">
      <h2>Welcome to the Quiz! please choose the correct answer wisely.</h2>
      <p>{`Question number ${qNum}`}</p>
      <Question
        question={question}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        questionNum={qNum}
        // questionId={`1-1`}
        questionId1={questionId1}
        questionId2={questionId2}
        questionId3={questionId3}
        questionId4={questionId4}
      />

      <HandleControls />
      <p>{qNum}</p>
    </div>
  );
}

export default App;
