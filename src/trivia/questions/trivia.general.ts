import { TriviaCategory } from "../trivia.types";

export const generalQuestions: TriviaCategory = {
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
        },
        {
            id: 'q002',
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
            correct_answer: 2,
            category: 'general',
            difficulty: 'easy',
        },
        {
            id: 'q003',
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
            correct_answer: 2,
            category: 'general',
            difficulty: 'easy',
        }
    ]
}