import style from "./quizQuestion.module.scss";

interface QuizQuestionInterface {
  title: string;
}

function QuizQuestion(props: QuizQuestionInterface) {
  return (
    <div className={style.QuizQuestionContainer}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default QuizQuestion;
