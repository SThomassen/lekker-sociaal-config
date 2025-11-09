import { TriviaData } from "./trivia.types";
import { generalQuestions } from "./questions/trivia.general";
import { scienceQuestions } from "./questions/trivia.science";
import { historyQuestions } from "./questions/trivia.history";
import { geographyQuestions } from "./questions/trivia.geography";
import { entertainmentQuestions } from "./questions/trivia.entertainment";
import { sportsQuestions } from "./questions/trivia.sports";
import { technologyQuestions } from "./questions/trivia.technology";

export const defaultTriviaData: TriviaData = {
    general: generalQuestions,
    science: scienceQuestions,
    history: historyQuestions,
    geography: geographyQuestions,
    entertainment: entertainmentQuestions,
    sports: sportsQuestions,
    technology: technologyQuestions,
}