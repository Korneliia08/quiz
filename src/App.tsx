import { useState } from 'react'
import style from "./App.module.scss";
import Quiz from "./components/feature/quiz/quiz.tsx";

function App() {

  return (
    <div className={style.wrapper}>
        <Quiz/>
    </div>
  )
}

export default App
