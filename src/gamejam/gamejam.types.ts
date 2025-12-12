import { CommandConfig } from "../command/command.types";

export interface GameJamThemePool {
    name: string;
    themes: GameJamTheme[];
}

export interface GameJamTheme {
    name: string;
    description: string;
    created_by: string;
    created_at: Date;
    votes: number;
    voters: string[];
}

export interface GameJam {
    id: string;
    name: string;
    description: string;
    theme: string;
    duration: number; // in days
    start_time: number; // timestamp
    end_time: number; // timestamp
    created_by: string; // user ID
    created_by_username: string;
    participants: string[]; // user IDs
    status: 'active' | 'completed' | 'cancelled';
    scheduled_event_id?: string; // Discord scheduled event ID
    announcement_message_id?: string; // Discord message ID
    announcement_channel_id?: string; // Discord channel ID
}

export interface GameJamData {
    active_jams: { [jam_id: string]: GameJam };
    completed_jams: { [jam_id: string]: GameJam };
    suggested_themes: { [pool_name: string]: GameJamThemePool }; // Multiple suggestion pools
}

export interface GameJamConfig {
    enable: boolean;
    start: CommandConfig & {
        announcement_channel: string;
        max_duration_days: number;
        min_duration_days: number;
        default_theme_pool: string; // Which theme pool to use by default
    };
    pools: CommandConfig;
    themes: CommandConfig;
    status: CommandConfig;
    join: CommandConfig;
    end: CommandConfig & {
        announcement_channel: string;
    };
    suggest_theme: CommandConfig & {
        pool: string; // Which pool to add suggestions to
    };
}

export interface GameJamUser {
    user_id: string;
    username: string;
    total_jams: GameJamCompleted[];
    completed_jams: GameJamCompleted[];
    cancelled_jams: GameJamCompleted[];
    total_time: number;
    average_time: number;
    best_time: number;
    worst_time: number;
}

export interface GameJamCompleted {
    jam_id: string;
    user_id: string;
    username: string;
    timestamp: number;
    media_id: string;
    finished_at: number;
    discord_message_id: string;
    discord_channel_id: string;
}

export interface GameJamStats {
    users: { [user_id: string]: GameJamUser };
    leaderboards: {
        daily: { [user_id: string]: GameJamUser };
        weekly: { [user_id: string]: GameJamUser };
        monthly: { [user_id: string]: GameJamUser };
        all_time: { [user_id: string]: GameJamUser };
    };
}