import { CommandConfig } from "./core/botConfig";

export interface TriviaConfig {
    enable: boolean;
    daily_question: CommandConfig & {
        xp_reward: number;
        time_limit_seconds: number;
        post_time: string;
        timezone: string;
        auto_post: boolean;
        channel: string;
    };
    question: CommandConfig & {
        xp_reward: number;
        time_limit_seconds: number;
        cooldown_seconds: number;
    };
    leaderboard: CommandConfig & {
        max_entries: number;
        show_avatars: boolean;
        time_periods: string[];
    };
    stats: CommandConfig & {
        show_streak: boolean;
        show_accuracy: boolean;
        show_total_questions: boolean;
    };
    categories: { [category: string]: TriviaCategoryConfig };
    difficulty_multipliers: {
        easy: number;
        medium: number;
        hard: number;
    };
    streak_bonuses: {
        enable: boolean;
        bonus_xp_per_streak: number;
        max_streak_bonus: number;
    };
}

export interface TriviaCategoryConfig {
    name: string;
    emoji: string;
    weight: number;
    questions: TriviaQuestion[];
}

export interface TriviaQuestion {
    id: string;
    question: string;
    options: string[];
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    correct_answer: number;
    explanation: string;
}

export interface TriviaData {
    [category: string]: TriviaCategoryConfig;
}

export interface TriviaStatsData {
    users: { [userId: string]: TriviaUserData };
    leaderboards: {
        daily: { [userId: string]: TriviaUserData };
        weekly: { [userId: string]: TriviaUserData };
        monthly: { [userId: string]: TriviaUserData };
        all_time: { [userId: string]: TriviaUserData };
    };
}

export interface TriviaUserData {
    userId: string;
    username: string;
    total_questions: number;
    correct_answers: number;
    current_streak: number;
    best_streak: number;
}

export const defaultTriviaStats: TriviaStatsData = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
}

export const defaultTrivia: TriviaData = {
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

export const defaultTriviaConfig: TriviaConfig = {
    enable: true,
    daily_question: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
        xp_reward: 100,
        time_limit_seconds: 30,
        post_time: '12:00',
        timezone: 'Europe/Amsterdam',
        auto_post: true,
        channel: 'general'
    },
    question: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
        xp_reward: 50,
        time_limit_seconds: 30,
        cooldown_seconds: 60
    },
    leaderboard: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        max_entries: 10,
        show_avatars: true,
        time_periods: ['daily', 'weekly', 'monthly', 'all_time']
    },
    stats: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        show_streak: true,
        show_accuracy: true,
        show_total_questions: true
    },
    categories: defaultTrivia,
    difficulty_multipliers: {
        easy: 1,
        medium: 1.5,
        hard: 2
    },
    streak_bonuses: {
        enable: true,
        bonus_xp_per_streak: 10,
        max_streak_bonus: 200
    }
}