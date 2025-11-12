export interface LevelingConfig {
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

// Combined User Data Structure for users.json
export interface LevelingUser {
    user_id: string;
    username: string;
    last_message_time: number; // For cooldown tracking
    last_daily_bonus: number; // Timestamp of last daily bonus claim
    xp: {
        general: number;
        [category: string]: number;
    };
    total_level: number;
    category_levels: {
        [category: string]: number;
    };
    category_stats: {
        [category: string]: {
            media_shared: number;
            reactions_received: { [emoji: string]: number };
            reactions_given: { [emoji: string]: number };
        };
    };
    reaction_tracking: {
        [messageId: string]: {
            message_id: string;
            channel_id: string;
            timestamp: number;
        };
    };
}

export interface LevelingStats {
    users: { [userId: string]: LevelingUser };
    leaderboards: {
        daily: { [userId: string]: LevelingUser };
        weekly: { [userId: string]: LevelingUser };
        monthly: { [userId: string]: LevelingUser };
        all_time: { [userId: string]: LevelingUser };
    };
}