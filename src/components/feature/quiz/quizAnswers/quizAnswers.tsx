import style from "./QuizAnswers.module.scss";
import { AnswerInterface } from "../../../../models/answerInterface.ts";
import { useState } from "react";

interface QuizAnswersInterface {
  answers: AnswerInterface[];
  onSelectAnswer: (correct: boolean) => void;
}

function QuizAnswers(props: QuizAnswersInterface) {
  const [correct, setCorrect] = useState(false);
  const [uncorrect, setUncorrect] = useState(false);

  function chooseAnswere(answer: AnswerInterface) {
    props.onSelectAnswer(answer.isCorrect);
    if (answer.isCorrect) {
      setCorrect(true);
    } else {
      setUncorrect(true);
    }
  }

  const answersMap = props.answers.map((answer) => {
    return <div onClick={() => chooseAnswere(answer)}>{answer.text}</div>;
  });
  return <div className={style.QuizAnswersContainer}>{answersMap}</div>;
}

export default QuizAnswers;
