import style from "./quizBottomBar.module.scss";
import Turn from "./turn/turn.tsx";
import { Question } from "../../../../models/class/question.ts";
import { useEffect } from "react";

interface QuizBottomBarInterface {
  questionsData: Question[];
}

function QuizBottomBar(props: QuizBottomBarInterface) {
  const turns = props.questionsData.map((question, index) => {
    return <Turn correct={question.correct} key={index} />;
  });
  useEffect(() => {
    console.log(props.questionsData);
  }, [props.questionsData]);
  return <div className={style.bottomBarContainer}>{turns}</div>;
}

export default QuizBottomBar;
