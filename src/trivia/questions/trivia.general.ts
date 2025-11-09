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
            explanation: 'Paris has been the capital of France since the 6th century.',
        },
        {
            id: 'q002',
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
            correct_answer: 2,
            category: 'general',
            difficulty: 'easy',
            explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503-1519.',
        },
        {
            id: 'q003',
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
            correct_answer: 2,
            category: 'general',
            difficulty: 'easy',
            explanation: 'Jupiter is the largest planet in our solar system by both mass and volume.',
        }
    ]
}