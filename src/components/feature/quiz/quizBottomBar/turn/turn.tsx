import style from "./turn.module.scss";
import { useEffect, useState } from "react";

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
  return <div className={`${style.turn} ${correctClass}`}></div>;
}

export default Turn;
