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
  //current question number
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  // questions object state
  const [questionsArray, setQuestionsArray] = useState<Question[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    //push data to state
    const tmpArray: Question[] = [];
    questions.forEach((question) => {
      //randomize answers order
      question.answers.sort(() => Math.random() - 0.5);
      const tmpObject = new Question(question.answers, question.question);
      tmpArray.push(tmpObject);
    });
    setQuestionsArray(tmpArray);
    // reset current question
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
    // if all question complete go to summery page
    if (currentQuestionNumber + 1 >= questionsArray.length) {
      props.setQuestionDataToResult(questionsArray);
      navigate("summary");
      return;
    }
    // select next active question
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

  //if loading data display ,,loading"
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
