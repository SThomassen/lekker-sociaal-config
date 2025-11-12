import { CommandConfig } from "../command/command.types";

export interface GameConfig {
    trigger: CommandConfig & {
        cooldown: number; // in milliseconds
        custom_message: string;
        reaction_emoji: string;
        timeout_seconds?: number; // 0 = permanent, > 0 = temporary (auto-delete after X seconds)
    };
    leaderboard: CommandConfig & {
        max_entries: number;
    };
    stats: CommandConfig & {
        show_user_triggers: boolean;
    };
    message_detection: {
        enable: boolean;
        trigger_keywords: string[];
        channel: string;
        mention_user: boolean;
        custom_message: string;
        cooldown: number; // in milliseconds
        reaction_emoji: string;
        timeout_seconds?: number; // 0 = permanent, > 0 = temporary (auto-delete after X seconds)
    };
}

export interface GameStatsUser {
    user_id: string;
    username: string;
    total_games: number;
    total_triggers: number;
    time_since_last_trigger: string;
}

export interface GameStats {
    users: { [user_id: string]: GameStatsUser };
    leaderboards: {
        daily: { [user_id: string]: GameStatsUser };
        weekly: { [user_id: string]: GameStatsUser };
        monthly: { [user_id: string]: GameStatsUser };
        all_time: { [user_id: string]: GameStatsUser };
    };
    total_triggers: number;
    last_triggered_by: string;
    time_since_last_trigger: string;
}