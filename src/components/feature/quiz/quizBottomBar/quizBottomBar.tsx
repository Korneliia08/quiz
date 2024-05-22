import style from "./quizBottomBar.module.scss";
import Turn from "./turn/turn.tsx";

interface QuizBottomBarInterface {
}

function QuizBottomBar(props: QuizBottomBarInterface) {
    return (
        <div className={style.bottomBarContainer}>
            <Turn/>
            <Turn/>
            <Turn/>
        </div>
    );
}

export default QuizBottomBar;
