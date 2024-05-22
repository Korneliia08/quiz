import style from "./QuizAnswers.module.scss";
import { AnswerInterface } from "../../../../models/answerInterface.ts";

interface QuizAnswersInterface {
  answers: AnswerInterface[];
  onSelectAnswer: (answer: string) => void;
}

function QuizAnswers(props: QuizAnswersInterface) {
  function chooseAnswere(answer: AnswerInterface) {}

  const answersMap = props.answers.map((answer) => {
    return <div onClick={() => chooseAnswere(answer)}>{answer.text}</div>;
  });
  return <div className={style.QuizAnswersContainer}>{answersMap}</div>;
}

export default QuizAnswers;
