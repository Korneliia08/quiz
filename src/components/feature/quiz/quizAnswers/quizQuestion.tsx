import style from "./QuizAnswers.module.scss";
import { AnswerInterface } from "../../../../models/answerInterface.ts";

interface QuizAnswersInterface {
  answers: AnswerInterface[];
}

function QuizAnswers(props: QuizAnswersInterface) {
  const answersMap = props.answers.map((answere) => {
    return <div>{answere.text}</div>;
  });
  return <div className={style.QuizAnswersContainer}>{answersMap}</div>;
}

export default QuizAnswers;
