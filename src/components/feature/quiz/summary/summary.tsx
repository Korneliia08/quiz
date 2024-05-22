import style from "./summary.module.scss";
import { NavLink } from "react-router-dom";
import { Question } from "../../../../models/class/question.ts";
import { useEffect, useState } from "react";

interface SummaryInterface {
  questionDataToResult: Question[];
}

function Summary(props: SummaryInterface) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (props.questionDataToResult.length > 0) {
      setTime(props.questionDataToResult[0].calcTime());
    }
  }, []);
  return (
    <div className={style.summaryContainer}>
      <h2>Quiz complete: </h2>
      <h3>Your time: {time} seconds</h3>
      <p>
        Correct answers:
        <b>
          {
            props.questionDataToResult.filter((question) => question.correct)
              .length
          }
        </b>
      </p>
      <p>
        Incorrect answers:
        <b>
          {
            props.questionDataToResult.filter((question) => !question.correct)
              .length
          }{" "}
        </b>
      </p>
      <NavLink className={style.back} to={"/"}>
        Replay
      </NavLink>
    </div>
  );
}

export default Summary;
