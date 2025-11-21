import { TriviaCategory } from "../trivia.types";

export const entertainmentQuestions: TriviaCategory = {
    name: 'Entertainment',
    emoji: '🎭',
    weight: 1,
    questions: [
        {
            id: 'q001',
            question: 'What is the capital of France?',
            options: ['London', 'Paris', 'Berlin', 'Madrid'],
            correct_answer: 1,
            category: 'entertainment',
            difficulty: 'easy',
        },
        {
            id: 'q002',
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
            correct_answer: 2,
            category: 'entertainment',
            difficulty: 'easy',
        },
        {
            id: 'q003',
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
            correct_answer: 2,
            category: 'entertainment',
            difficulty: 'easy',
        },
        {
            id: 'q004',
            question: 'What is the capital of Germany?',
            options: ['Berlin', 'Hamburg', 'Munich', 'Frankfurt'],
            correct_answer: 0,
            category: 'entertainment',
            difficulty: 'easy',
        }
    ]
}