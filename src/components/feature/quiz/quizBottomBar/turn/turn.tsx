import style from "./turn.module.scss";
import { useEffect, useState } from "react";
import check from "../../../../../assets/check.svg";
import cross from "../../../../../assets/cross.svg";

interface TurnInterface {
  correct: boolean | undefined;
}

function Turn(props: TurnInterface) {
  const [correctClass, setCorrectClass] = useState<string>();
  useEffect(() => {
    if (props.correct === true) {
      setCorrectClass(style.correctAnswer);
    }
    if (props.correct === false) {
      setCorrectClass(style.uncorrectAnswer);
    }
    if (props.correct === undefined) {
      setCorrectClass(undefined);
    }
  }, [props.correct]);
  return (
    <div className={`${style.turn} ${correctClass}`}>
      {props.correct === true && <img src={check} />}
      {correctClass == style.uncorrectAnswer && <img src={cross} />}
    </div>
  );
}

export default Turn;
