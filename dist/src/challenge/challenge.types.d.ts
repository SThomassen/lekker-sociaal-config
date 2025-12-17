import { CommandConfig } from "../command/command.types";
export interface ChallengeConfig {
    enable: boolean;
    challenges_channel?: string;
    add: CommandConfig;
    remove: CommandConfig;
    update: CommandConfig;
    list: CommandConfig;
    get: CommandConfig;
    random: CommandConfig;
    admin: CommandConfig;
    stats: CommandConfig;
}
export interface Challenge {
    id: string;
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
    user_id: string;
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
    users: {
        [user_id: string]: ChallengeStatsUser;
    };
    leaderboards: {
        daily: {
            [user_id: string]: ChallengeStatsUser;
        };
        weekly: {
            [user_id: string]: ChallengeStatsUser;
        };
        monthly: {
            [user_id: string]: ChallengeStatsUser;
        };
        all_time: {
            [user_id: string]: ChallengeStatsUser;
        };
    };
}
//# sourceMappingURL=challenge.types.d.ts.map