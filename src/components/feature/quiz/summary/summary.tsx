import style from "./summary.module.scss";
import { NavLink } from "react-router-dom";
import { Question } from "../../../../models/class/question.ts";

interface SummaryInterface {
  questionDataToResult: Question[];
}

function Summary(props: SummaryInterface) {
  return (
    <div className={style.summaryContainer}>
      <h2>Quiz complete</h2>
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
