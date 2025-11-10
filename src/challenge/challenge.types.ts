import { CommandConfig } from "../command/command.types";

export interface ChallengeConfig {
    add: CommandConfig;
    remove: CommandConfig;
    update: CommandConfig;
    list: CommandConfig;
    get: CommandConfig;
    random: CommandConfig;
    admin: CommandConfig;
}

export interface Challenge {
    name: string;
    description: string;
    time_limit?: number;
    difficulty?: 'easy' | 'medium' | 'hard';
    created_by?: string;
    created_at?: Date;
}

export interface ChallengeCategory {
    name: string;
    emoji: string;
    weight: number;
    description: string;
    challenges: Challenge[];
}

export interface ChallengeData {
    [category: string]: ChallengeCategory;
}

export interface ChallengeStatsUser {
    userId: string;
    username: string;
    total_challenges: number;
    completed_challenges: number;
    failed_challenges: number;
    total_time: number;
    average_time: number;
    best_time: number;
    worst_time: number;
    average_difficulty: number;
}

export interface ChallengeStats {
    users: { [userId: string]: ChallengeStatsUser };
    leaderboards: {
        daily: { [userId: string]: ChallengeStatsUser };
        weekly: { [userId: string]: ChallengeStatsUser };
        monthly: { [userId: string]: ChallengeStatsUser };
        all_time: { [userId: string]: ChallengeStatsUser };
    };
}