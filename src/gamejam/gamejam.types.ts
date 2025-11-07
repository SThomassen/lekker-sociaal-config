import { CommandConfig } from "../core/botConfig";

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
        permissions: string[];
    };
    suggest_theme: CommandConfig & {
        pool: string; // Which pool to add suggestions to
    };
}