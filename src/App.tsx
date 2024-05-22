import style from "./App.module.scss";
import Quiz from "./components/feature/quiz/quiz.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Summary from "./components/feature/quiz/summary/summary.tsx";
import { useState } from "react";
import { Question } from "./models/class/question.ts";
import { questions } from "./data/questions.ts";

function App() {
  const [questionDataToResult, setQuestionDataToResult] = useState<Question[]>(
    [],
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Quiz
          setQuestionDataToResult={setQuestionDataToResult}
          questions={questions}
        />
      ),
    },
    {
      path: "summary",
      element: <Summary questionDataToResult={questionDataToResult} />,
    },
  ]);
  return (
    <div className={style.wrapper}>
      <h1>Quiz:</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
