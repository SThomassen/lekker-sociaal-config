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
    startTime: number; // timestamp
    endTime: number; // timestamp
    createdBy: string; // user ID
    createdByUsername: string;
    participants: string[]; // user IDs
    status: 'active' | 'completed' | 'cancelled';
    scheduledEventId?: string; // Discord scheduled event ID
    announcementMessageId?: string; // Discord message ID
    announcementChannelId?: string; // Discord channel ID
}

export interface GameJamData {
    active_jams: { [jamId: string]: GameJam };
    completed_jams: { [jamId: string]: GameJam };
    suggested_themes: { [poolName: string]: GameJamThemePool }; // Multiple suggestion pools
}

export interface GameJamConfig {
    enable: boolean;
    start: CommandConfig & {
        announcement_channel: string;
        max_duration_days: number;
        min_duration_days: number;
        default_theme_pool: string; // Which theme pool to use by default
    };
    status: CommandConfig;
    join: CommandConfig;
    end: CommandConfig & {
        announcement_channel: string;
    };
    suggest_theme: CommandConfig & {
        pool: string; // Which pool to add suggestions to
    };
}

export interface GameJamStatsUser {
    userId: string;
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
    jamId: string;
    userId: string;
    username: string;
    timestamp: number;
    media_id: string;
    finished_at: number;
    discord_message_id: string;
    discord_channel_id: string;
}

export interface GameJamStats {
    users: { [userId: string]: GameJamStatsUser };
    leaderboards: {
        daily: { [userId: string]: GameJamStatsUser };
        weekly: { [userId: string]: GameJamStatsUser };
        monthly: { [userId: string]: GameJamStatsUser };
        all_time: { [userId: string]: GameJamStatsUser };
    };
}