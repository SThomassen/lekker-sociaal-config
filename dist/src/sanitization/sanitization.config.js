"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSanitizationConfig = void 0;
exports.defaultSanitizationConfig = {
    enable: true,
    strict_mode: false,
    log_warnings: true,
    log_errors: true,
    default_settings: {
        max_length: 1000,
        min_length: 0,
        allow_empty: true,
        trim_whitespace: true,
        remove_html: true,
        remove_special_chars: false,
        allow_international_chars: true
    },
    input_types: {
        media_title: {
            max_length: 200,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        media_creator: {
            max_length: 100,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        genre: {
            max_length: 50,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        notes: {
            max_length: 1000,
            min_length: 0,
            allow_empty: true,
            remove_html: true,
            remove_special_chars: false,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        username: {
            max_length: 32,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        channel_name: {
            max_length: 100,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        role_name: {
            max_length: 100,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        },
        reason: {
            max_length: 200,
            min_length: 1,
            allow_empty: false,
            remove_html: true,
            remove_special_chars: true,
            allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\u00C0-\\u017F\\u0100-\\u017F\\u0180-\\u024F\\u1E00-\\u1EFF]*$"
        }
    },
    discord_ids: {
        user_id: {
            pattern: "^\\d{17,19}$",
            strict_validation: true
        },
        channel_id: {
            pattern: "^\\d{17,19}$",
            strict_validation: true
        },
        message_id: {
            pattern: "^\\d{17,19}$",
            strict_validation: true
        },
        role_id: {
            pattern: "^\\d{17,19}$",
            strict_validation: true
        }
    },
    numeric_validation: {
        xp_amount: {
            min: 0,
            max: 10000,
            allow_decimals: false,
            allow_negative: false
        },
        trivia_answer: {
            min: 0,
            max: 3,
            allow_decimals: false,
            allow_negative: false
        },
        level: {
            min: 1,
            max: 1000,
            allow_decimals: false,
            allow_negative: false
        },
        count: {
            min: 0,
            max: 1000000,
            allow_decimals: false,
            allow_negative: false
        }
    },
    enum_validation: {
        difficulty: {
            allowed_values: ['easy', 'medium', 'hard'],
            case_sensitive: false
        }
    },
    malicious_content: {
        enable_detection: true,
        patterns: ["<script", "javascript:", "on\\w+\\s*=", "data:text\\/html", "vbscript:", "<iframe", "<object", "<embed", "<link", "<meta"],
        action: "remove",
        log_attempts: true,
        notify_admins: false
    },
    rate_limiting: {
        enable: false,
        max_requests_per_minute: 60,
        max_requests_per_hour: 1000,
        ban_duration_minutes: 60,
        whitelist_users: [],
        whitelist_roles: []
    },
    logging: {
        log_level: "warn",
        log_to_file: false,
        log_file_path: "./logs/sanitization.log",
        include_context: true,
        include_user_info: true,
        retention_days: 30
    },
    notifications: {
        notify_on_validation_failure: false,
        notify_on_malicious_content: true,
        notify_on_rate_limit: true,
        notification_channels: [],
        notification_roles: ["Administrator"]
    }
};
//# sourceMappingURL=sanitization.config.js.map