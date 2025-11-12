export interface SanitizationInputTypeConfig {
    max_length: number;
    min_length: number;
    allow_empty: boolean;
    remove_html: boolean;
    remove_special_chars: boolean;
    allowed_chars_pattern: string;
}

export interface SanitizationDiscordIdConfig {
    pattern: string;
    strict_validation: boolean;
}

export interface SanitizationNumericConfig {
    min: number;
    max: number;
    allow_decimals: boolean;
    allow_negative: boolean;
}

export interface SanitizationEnumConfig {
    allowed_values: string[];
    case_sensitive: boolean;
}

export interface SanitizationMaliciousContentConfig {
    enable_detection: boolean;
    patterns: string[];
    action: 'remove' | 'block' | 'warn';
    log_attempts: boolean;
    notify_admins: boolean;
}

export interface SanitizationRateLimitingConfig {
    enable: boolean;
    max_requests_per_minute: number;
    max_requests_per_hour: number;
    ban_duration_minutes: number;
    whitelist_users: string[];
    whitelist_roles: string[];
}

export interface SanitizationLoggingConfig {
    log_level: 'debug' | 'info' | 'warn' | 'error';
    log_to_file: boolean;
    log_file_path: string;
    include_context: boolean;
    include_user_info: boolean;
    retention_days: number;
}

export interface SanitizationNotificationsConfig {
    notify_on_validation_failure: boolean;
    notify_on_malicious_content: boolean;
    notify_on_rate_limit: boolean;
    notification_channels: string[];
    notification_roles: string[];
}

export interface SanitizationConfig {
    enable: boolean;
    strict_mode: boolean;
    log_warnings: boolean;
    log_errors: boolean;
    default_settings: {
        max_length: number;
        min_length: number;
        allow_empty: boolean;
        trim_whitespace: boolean;
        remove_html: boolean;
        remove_special_chars: boolean;
        allow_international_chars: boolean;
    };
    input_types: {
        media_title: SanitizationInputTypeConfig;
        media_creator: SanitizationInputTypeConfig;
        genre: SanitizationInputTypeConfig;
        notes: SanitizationInputTypeConfig;
        username: SanitizationInputTypeConfig;
        channel_name: SanitizationInputTypeConfig;
        role_name: SanitizationInputTypeConfig;
        reason: SanitizationInputTypeConfig;
    };
    discord_ids: {
        user_id: SanitizationDiscordIdConfig;
        channel_id: SanitizationDiscordIdConfig;
        message_id: SanitizationDiscordIdConfig;
        role_id: SanitizationDiscordIdConfig;
    };
    numeric_validation: {
        xp_amount: SanitizationNumericConfig;
        trivia_answer: SanitizationNumericConfig;
        level: SanitizationNumericConfig;
        count: SanitizationNumericConfig;
    };
    enum_validation: {
        difficulty: SanitizationEnumConfig;
    };
    malicious_content: SanitizationMaliciousContentConfig;
    rate_limiting: SanitizationRateLimitingConfig;
    logging: SanitizationLoggingConfig;
    notifications: SanitizationNotificationsConfig;
}