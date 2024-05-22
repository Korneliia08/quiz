import style from './quiz.module.scss'
import {questions} from "../../../data/questions.ts";
import QuizTopBar from "./quizTopBar/quizTopBar.tsx";
interface QuizInterface{
    questionNumber:number;
    questionCount:number
}
function Quiz(props:QuizInterface) {

const data = questions;
    return (
        <div className={style.quizContainer}>
            <QuizTopBar questionCount={data.length} questionNumber={1}/>
            <div>

                tu pytania będą

            </div>
            </div>
    )
}

export default Quiz
