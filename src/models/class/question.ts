import { AnswerInterface } from "../answerInterface.ts";

export class Question {
  answers: AnswerInterface[];
  question: string;
  correct: boolean | undefined;
  open: boolean;

  constructor(answers: AnswerInterface[], question: string) {
    this.correct = undefined;
    this.answers = answers;
    this.question = question;
    this.open = true;
  }
}
