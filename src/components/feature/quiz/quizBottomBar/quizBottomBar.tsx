import style from "./quizBottomBar.module.scss";

interface QuizBottomBarInterface {}

function QuizBottomBar(props: QuizBottomBarInterface) {
  return (
    <div className={style.topBarContainer}>
      3 kułka, z dodatkową klasą która ustawia że zielone
    </div>
  );
}

export default QuizBottomBar;
