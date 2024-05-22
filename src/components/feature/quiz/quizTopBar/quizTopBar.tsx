import style from './quizTopBar.module.scss'

interface QuizTopBarInterface{
    questionNumber:number;
    questionCount:number
}
function QuizTopBar(props:QuizTopBarInterface) {

    return (
        <div className={style.topBarContainer}>
        <h2>Question {props.questionNumber} of {props.questionCount}</h2>
        </div>
    )
}

export default QuizTopBar
