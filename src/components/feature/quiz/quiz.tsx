import style from "./quiz.module.scss";
import {questions} from "../../../data/questions.ts";
import QuizTopBar from "./quizTopBar/quizTopBar.tsx";
import {useEffect, useState} from "react";
import {Question} from "../../../models/class/question.ts";
import QuizBottomBar from "./quizBottomBar/quizBottomBar.tsx";
import QuizQuestion from "./quizQuestion/quizQuestion.tsx";
import QuizAnswers from "./quizAnswers/quizAnswers.tsx";

interface QuizInterface {
    questionNumber: number;
    questionCount: number;
}

function Quiz(props: QuizInterface) {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
    const [questionsArray, setQuestionsArray] = useState<Question[]>([]);
    useEffect(() => {
        const tmpArray: Question[] = [];
        questions.forEach((question) => {
            const tmpObject = new Question(question.answers, question.question);
            tmpArray.push(tmpObject);
        });
        setQuestionsArray(tmpArray);
        setCurrentQuestionNumber(0);
    }, []);

    function checkQuestion() {
        nextQuestion();
    }

    function nextQuestion() {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
    }

    if (!questionsArray.length) return <span>Loading question</span>;
    return (
        <div className={style.quizContainer}>
            <QuizTopBar questionCount={questionsArray.length} questionNumber={1}/>
            <div>
                <QuizQuestion title={questionsArray[currentQuestionNumber].question}/>
                <QuizAnswers answers={questionsArray[currentQuestionNumber].answers}/>
            </div>

            <button onClick={checkQuestion} className={style.btnNext}>Next</button>
            <QuizBottomBar/>
        </div>
    );
}

export default Quiz;
