import { SanitizationConfig } from "./sanitazion";

// Bot Configuration Types
export interface CommandConfig {
    enable: boolean;
    permissions: string[];
    allowed_channels: string[]; // empty = all channels
    ephemeral?: boolean;
}

export interface LostGameConfig {
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
        channel: string;
        mention_user: boolean;
        custom_message: string;
        cooldown: number; // in milliseconds
        reaction_emoji: string;
        timeout_seconds?: number; // 0 = permanent, > 0 = temporary (auto-delete after X seconds)
    };
}

export interface MediaCommandConfig extends CommandConfig {
    reward_bonus_per_channel?: { [channelName: string]: number };
    reward_bonus_per_role?: { [roleName: string]: number };
    max_results?: number;
    items_per_page?: number;
    show_filters?: boolean;
    require_approval?: boolean;
    max_items_per_user?: number;
    allow_self_removal?: boolean;
    allow_self_update?: boolean;
    auto_detection?: {
        enable: boolean;
        min_confidence: number;
        platforms: {
            youtube: boolean;
            spotify: boolean;
            imdb: boolean;
            steam: boolean;
        };
    };
}

export interface MediaConfig {
    add_item: MediaCommandConfig;
    remove_item: MediaCommandConfig;
    update_item: MediaCommandConfig;
    get: MediaCommandConfig;
    list: MediaCommandConfig;
    random: MediaCommandConfig;
    id: MediaCommandConfig;
    stats: MediaStatsConfig;
}

export interface MediaTypeConfig {
    name: string;
    emoji: string;
    color: number;
    thumbnail: string;
    collectionKey: string;
    modalId: string;
    showCreatorInTitle: boolean;
    fields: {
        title: string;
        creator?: string;
        genre?: string;
    };
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

export interface MediaStatsConfig extends CommandConfig {
    show_total_items: boolean;
    show_category_breakdown: boolean;
    show_top_contributors: boolean;
    max_contributors: number;
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

export interface TriviaCategoryConfig {
    name: string;
    emoji: string;
    weight: number;
}

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

export interface ChallengeConfig {
    get: CommandConfig;
    random: CommandConfig;
    categories: { [category: string]: any };
    admin: CommandConfig;
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
