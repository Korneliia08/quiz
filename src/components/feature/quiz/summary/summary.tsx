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
        Correct:s{" "}
        {
          props.questionDataToResult.filter((question) => question.correct)
            .length
        }
      </p>
      <p>
        UnCorrect:{" "}
        {
          props.questionDataToResult.filter((question) => !question.correct)
            .length
        }
      </p>
      <NavLink to={"/"}>Replay</NavLink>
    </div>
  );
}

export default Summary;
