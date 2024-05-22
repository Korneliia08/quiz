import style from "./quiz.module.scss";
import { questions } from "../../../data/questions.ts";
import QuizTopBar from "./quizTopBar/quizTopBar.tsx";
import { useEffect, useState } from "react";
import { Question } from "../../../models/class/question.ts";
import QuizBottomBar from "./quizBottomBar/quizBottomBar.tsx";
import QuizQuestion from "./quizQuestion/quizQuestion.tsx";
import QuizAnswers from "./quizAnswers/quizAnswers.tsx";
import { useNavigate } from "react-router";

interface QuizInterface {
  questionNumber: number;
  questionCount: number;
  setQuestionDataToResult: (data: Question[]) => void;
}

function Quiz(props: QuizInterface) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [questionsArray, setQuestionsArray] = useState<Question[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const tmpArray: Question[] = [];
    questions.forEach((question) => {
      const tmpObject = new Question(question.answers, question.question);
      tmpArray.push(tmpObject);
    });
    setQuestionsArray(tmpArray);
    setCurrentQuestionNumber(0);
  }, []);

  function checkQuestion() {
    nextQuestion();
  }

  // Go to next question
  function nextQuestion() {
    //check if current question is selected
    if (questionsArray[currentQuestionNumber].open) {
      console.log("select ");
      return;
    }
    if (currentQuestionNumber + 1 >= questionsArray.length) {
      props.setQuestionDataToResult(questionsArray);
      navigate("summary");
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  }

  function onSelectAnswer(correct: string) {
    //question is resolve and close
    if (!questionsArray[currentQuestionNumber].open) return;
    // update question data after choose answer
    setQuestionsArray(
      questionsArray.map((question, index) => {
        if (index == currentQuestionNumber) {
          question.setSelectedAnswer(correct);
        }
        return question;
      }),
    );
  }

  if (!questionsArray.length) return <span>Loading question</span>;
  return (
    <div className={style.quizContainer}>
      <QuizTopBar
        questionCount={questionsArray.length}
        questionNumber={currentQuestionNumber + 1}
      />
      <div>
        <QuizQuestion title={questionsArray[currentQuestionNumber].question} />
        <QuizAnswers
          questionsData={questionsArray[currentQuestionNumber]}
          onSelectAnswer={onSelectAnswer}
        />
      </div>

      <button
        className={style.btnNext}
        disabled={questionsArray[currentQuestionNumber].open}
        onClick={checkQuestion}
      >
        Next
      </button>
      <QuizBottomBar questionsData={questionsArray} />
    </div>
  );
}

export default Quiz;
