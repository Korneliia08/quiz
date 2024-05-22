import { AnswerInterface } from "../answerInterface.ts";

export class Question {
  answers: AnswerInterface[];
  question: string;
  correct: boolean | undefined;
  open: boolean;
  selectedAnswer: string | undefined;
  selectedAnswerCorrect: boolean | undefined;

  constructor(answers: AnswerInterface[], question: string) {
    this.correct = undefined;
    this.answers = answers;
    this.question = question;
    this.open = true;
  }

  setSelectedAnswer(title: string) {
    this.selectedAnswer = title;
    this.open = false;
    const findAnswer = this.answers.find((answer) => answer.text == title);
    if (findAnswer) {
      this.correct = findAnswer.isCorrect;
      this.selectedAnswerCorrect = findAnswer.isCorrect;
    }
  }
}
