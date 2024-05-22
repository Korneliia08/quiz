import style from "./quiz.module.scss";
import { questions } from "../../../data/questions.ts";
import QuizTopBar from "./quizTopBar/quizTopBar.tsx";
import { useEffect, useState } from "react";
import { Question } from "../../../models/class/question.ts";
import QuizBottomBar from "./quizBottomBar/quizBottomBar.tsx";

interface QuizInterface {
  questionNumber: number;
  questionCount: number;
}

function Quiz(props: QuizInterface) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [questionsArray, setQuestionsArray] = useState<Question[]>([]);
  useEffect(() => {
    const tmpArray: Question[] = [];
    questions.forEach((question) => {
      const tmpObject = new Question(question.answers, question.question);
      tmpArray.push(tmpObject);
    });
    setQuestionsArray(tmpArray);
  }, []);

  return (
    <div className={style.quizContainer}>
      <QuizTopBar questionCount={questionsArray.length} questionNumber={1} />
      <div></div>
      <QuizBottomBar />
    </div>
  );
}

export default Quiz;
