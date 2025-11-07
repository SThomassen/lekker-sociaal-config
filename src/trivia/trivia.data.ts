import { TriviaStatsData } from "./trivia.types";
import { TriviaData } from "./trivia.types";

export const defaultTriviaStatsData: TriviaStatsData = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
}

export const defaultTriviaData: TriviaData = {
    general: {
        name: 'General Knowledge',
        emoji: '🧠',
        weight: 1,
        questions: [
            {
                id: 'q001',
                question: 'What is the capital of France?',
                options: ['London', 'Paris', 'Berlin', 'Madrid'],
                correct_answer: 1,
                category: 'general',
                difficulty: 'easy',
                explanation: 'Paris has been the capital of France since the 6th century.'
            }
        ]
    }
}