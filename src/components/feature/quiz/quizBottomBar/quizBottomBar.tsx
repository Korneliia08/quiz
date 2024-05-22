import style from "./quizBottomBar.module.scss";
import Turn from "./turn/turn.tsx";
import { Question } from "../../../../models/class/question.ts";

interface QuizBottomBarInterface {
  questionsData: Question[];
}

function QuizBottomBar(props: QuizBottomBarInterface) {
  // map answers
  const turns = props.questionsData.map((question, index) => {
    return <Turn correct={question.correct} key={index} />;
  });

  return <div className={style.bottomBarContainer}>{turns}</div>;
}

export default QuizBottomBar;
