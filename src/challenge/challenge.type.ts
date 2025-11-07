import { CommandConfig } from "../core/botConfig";

export interface ChallengeConfig {
    get: CommandConfig;
    random: CommandConfig;
    admin: CommandConfig;
}

export interface Challenge {
    name: string;
    description: string;
    time_limit?: number;
    difficulty?: string;
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