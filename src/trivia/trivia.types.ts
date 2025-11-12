import { CommandConfig } from "../command/command.types";

export interface TriviaConfig {
    enable: boolean;
    trivia_api_url: string;
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

export interface TriviaCategory {
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
    [category: string]: TriviaCategory;
}

export interface TriviaStats {
    users: { [userId: string]: TriviaUser };
    leaderboards: {
        daily: { [userId: string]: TriviaUser };
        weekly: { [userId: string]: TriviaUser };
        monthly: { [userId: string]: TriviaUser };
        all_time: { [userId: string]: TriviaUser };
    };
}

export interface TriviaUser {
    userId: string;
    username: string;
    total_questions: number;
    correct_answers: number;
    current_streak: number;
    best_streak: number;
    last_answer_time: number;
    accuracy: number;
    category_stats: { [category: string]: { total: number; correct: number, accuracy: number } };
    difficulty_stats: { [difficulty: string]: { total: number; correct: number, accuracy: number } };
}