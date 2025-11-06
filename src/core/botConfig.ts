import { SanitizationConfig } from "./sanitazion";
import { TriviaConfig } from "../trivia";
import { GameJamConfig } from "../gamejam";
import { ChallengeConfig } from "../challenges";
import { LostGameConfig } from "../lostGame";
import { MediaConfig } from "../media";
import { MediaTypeConfig } from "../media";

// Bot Configuration Types
export interface CommandConfig {
    enable: boolean;
    permissions: string[];
    allowed_channels: string[]; // empty = all channels
    ephemeral?: boolean;
}

export interface XPSystemConfig {
    enable: boolean;
    xp_values: {
        message: number;
        reaction_given: number;
        reaction_received: number;
        media_shared: number;
        media_get: number;
        media_list: number;
        media_random: number;
        social_stats: number;
        social_leaderboard: number;
    };
    anti_abuse: {
        message_cooldown_ms: number;
        min_message_length: number;
        min_word_count: number;
        ignored_channels: string[];
        ignored_channel_types: string[];
        max_xp_per_hour: number;
    };
    level_formula: {
        sqrt_multiplier: number;
        custom_formula: boolean;
    };
    channel_categories: { [channelName: string]: string };
    role_bonuses: { [roleName: string]: number };
    role_assignments: {
        enable: boolean;
        milestones: {
            [category: string]: {
                [level: number]: string; // level -> role name
            };
        };
        remove_on_level_down: boolean;
        notify_on_assignment: boolean;
    };
    daily_bonus: {
        enable: boolean;
        xp_amount: number;
        reset_hour: number; // Hour of day to reset (0-23, UTC)
    };
    allowed_emotes: {
        enable_filtering: boolean;
        allowed_emotes: string[]; // Array of emote names/IDs that are allowed for XP
    };
}

export interface SocialConfig {
    stats: CommandConfig & {
        show_progress_bar: boolean;
        show_category_breakdown: boolean;
    };
    leaderboard: CommandConfig & {
        max_entries: number;
        show_avatars: boolean;
    };
    rank: CommandConfig & {
        show_rank_number: boolean;
    };
    top_media: CommandConfig & {
        max_entries: number;
    };
}

export interface GeneralConfig {
    prefix: string;
    language: string;
    timezone: string;
    logging: {
        enable: boolean;
        log_level: 'debug' | 'info' | 'warn' | 'error';
        log_commands: boolean;
        log_xp_events: boolean;
    };
    maintenance: {
        enable: boolean;
        maintenance_message: string;
    };
    backup: {
        auto_backup: boolean;
        backup_interval_hours: number;
        max_backups: number;
    };
    presence_dynamic: boolean;
    presence_text: string;
}

export interface NotificationConfig {
    level_up: {
        enable: boolean;
        channel: string;
        mention_user: boolean;
        show_progress: boolean;
        ephemeral: boolean;
    };
    media_added: {
        enable: boolean;
        channel: string;
        mention_user: boolean;
        ephemeral: boolean;
    };
}

export interface StylingConfig {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    background_color: string;
    text_color: string;
    font: string;
}

export interface MusicMondayConfig {
    enable: boolean;
    channel: string;
    post_time: string;
    timezone: string;
    search_terms: string[];
    filters: {
        blacklist: {
            artists: string[];
            genres: string[];
            keywords: string[];
        };
        whitelist: {
            artists: string[];
            genres: string[];
            keywords: string[];
        };
        enable_blacklist: boolean;
        enable_whitelist: boolean;
    };
}


export interface BotConfig {
    lost_game: LostGameConfig;
    media: MediaConfig;
    xp_system: XPSystemConfig;
    social: SocialConfig;
    ping: CommandConfig;
    trivia: TriviaConfig;
    gamejam: GameJamConfig;
    challenge: ChallengeConfig;
    general: GeneralConfig;
    notifications: NotificationConfig;
    styling: StylingConfig;
    sanitization: SanitizationConfig;
    music_monday: MusicMondayConfig;
    media_types: MediaTypeConfig[];
}
