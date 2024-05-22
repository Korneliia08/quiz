import style from "./QuizAnswers.module.scss";
import { AnswerInterface } from "../../../../models/answerInterface.ts";
import { Question } from "../../../../models/class/question.ts";

interface QuizAnswersInterface {
  questionsData: Question;
  onSelectAnswer: (answer: string) => void;
}

function QuizAnswers(props: QuizAnswersInterface) {
  function chooseAnswere(answer: AnswerInterface) {
    props.onSelectAnswer(answer.text);
  }

  function checkCorrect(answer: AnswerInterface) {
    if (answer.text != props.questionsData.selectedAnswer) return;
    if (props.questionsData.selectedAnswerCorrect) {
      return style.correct;
    } else {
      return style.unCorrect;
    }
  }

  const answersMap = props.questionsData.answers.map((answer) => {
    return (
      <div
        className={`${style.optionOfAnswer} ${checkCorrect(answer)} ${!props.questionsData.open ? style.close : ""}`}
        onClick={() => chooseAnswere(answer)}
      >
        {answer.text}
      </div>
    );
  });
  return <div className={style.quizAnswersContainer}>{answersMap}</div>;
}

export default QuizAnswers;
