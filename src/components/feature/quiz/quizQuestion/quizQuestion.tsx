import style from './quizQuestion.module.scss'
import {questions} from "../../../data/questions.ts";
import QuizTopBar from "./quizTopBar/quizTopBar.tsx";
interface QuizQuestionInterface{
 title:string
}
function QuizQuestion(props:QuizQuestionInterface) {

    return (
        <div className={style.QuizQuestionContainer}>
            {props.title}
        </div>
    )
}

export default QuizQuestion
