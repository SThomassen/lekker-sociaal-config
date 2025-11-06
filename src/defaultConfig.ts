import { BotConfig } from "./botConfig";

// Default configuration
export const defaultBotConfig: BotConfig = {
    lost_game: {
        trigger: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false,
            cooldown: 300000, // 5 minutes
            custom_message: "You lost the game! 😈",
            reaction_emoji: "😈",
            timeout_seconds: 0 // Default to permanent messages
        },
        leaderboard: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false,
            max_entries: 10
        },
        stats: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false,
            show_user_triggers: true
        },
        message_detection: {
            enable: true,
            channel: 'general',
            mention_user: true,
            custom_message: "I LOST THE GAME!",
            cooldown: 300000, // 5 minutes in milliseconds
            reaction_emoji: "😈",
            timeout_seconds: 0 // Default to permanent messages
        }
    },
    media: {
        add_item: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            require_approval: false,
            max_items_per_user: 50,
            auto_detection: {
                enable: true,
                min_confidence: 0.6,
                platforms: {
                    youtube: true,
                    spotify: true,
                    imdb: true,
                    steam: true
                }
            }
        },
        remove_item: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            allow_self_removal: false
        },
        update_item: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            allow_self_update: false
        },
        get: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            max_results: 10
        },
        list: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            items_per_page: 10,
            show_filters: true
        },
        random: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        id: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        stats: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            show_total_items: true,
            show_category_breakdown: true,
            show_top_contributors: true,
            max_contributors: 5
        }
    },
    xp_system: {
        enable: true,
        xp_values: {
            message: 2,
            reaction_given: 1,
            reaction_received: 2,
            media_shared: 3,
            media_get: 1,
            media_list: 1,
            media_random: 1,
            social_stats: 1,
            social_leaderboard: 1
        },
        anti_abuse: {
            message_cooldown_ms: 15000,
            min_message_length: 10,
            min_word_count: 3,
            ignored_channels: ['bot-commands', 'general'],
            ignored_channel_types: ['bot-commands'],
            max_xp_per_hour: 100
        },
        level_formula: {
            sqrt_multiplier: 0.2,
            custom_formula: false
        },
        channel_categories: {
            'films': 'films',
            'music': 'music',
            'games': 'games'
        },
        role_bonuses: {
            'Movie Buff': 1.5,
            'Music Lover': 1.5,
            'Gamer': 1.5
        },
        role_assignments: {
            enable: true,
            milestones: {
                'films': {
                    5: 'Movie Enthusiast',
                    10: 'Movie Buff',
                    20: 'Cinema Expert',
                    30: 'Film Critic'
                },
                'music': {
                    5: 'Music Fan',
                    10: 'Music Lover',
                    20: 'Music Expert',
                    30: 'Music Connoisseur'
                },
                'games': {
                    5: 'Casual Gamer',
                    10: 'Gamer',
                    20: 'Gaming Expert',
                    30: 'Gaming Master'
                },
                'general': {
                    10: 'Active Member',
                    25: 'Veteran Member',
                    50: 'Community Legend'
                }
            },
            remove_on_level_down: false,
            notify_on_assignment: true
        },
        daily_bonus: {
            enable: true,
            xp_amount: 50,
            reset_hour: 0
        },
        allowed_emotes: {
            enable_filtering: false,
            allowed_emotes: []
        }
    },
    social: {
        stats: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            show_progress_bar: true,
            show_category_breakdown: true
        },
        leaderboard: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            max_entries: 10,
            show_avatars: true
        },
        rank: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            show_rank_number: true
        },
        top_media: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            max_entries: 5
        }
    },
    ping: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false
    },
    gamejam: {
        enable: true,
        start: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false,
            announcement_channel: 'general',
            max_duration_days: 30,
            min_duration_days: 1,
            default_theme_pool: 'default'
        },
        status: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        join: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        end: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false
        },
        suggest_theme: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            pool: 'default'
        }
    },
    challenge: {
        get: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        random: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false
        },
        categories: {
            general: {
                name: 'General',
                description: 'General challenges',
                difficulty: 'medium'
            },
            creative: {
                name: 'Creative',
                description: 'Creative challenges',
                difficulty: 'hard'
            },
            technical: {
                name: 'Technical',
                description: 'Technical challenges',
                difficulty: 'hard'
            }
        },
        admin: {
            enable: true,
            permissions: ['Administrator', 'Moderator'],
            allowed_channels: [],
            ephemeral: false
        }
    },
    trivia: {
        enable: true,
        daily_question: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            xp_reward: 100,
            time_limit_seconds: 30,
            post_time: '12:00',
            timezone: 'Europe/Amsterdam',
            auto_post: true,
            channel: 'general'
        },
        question: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: false,
            xp_reward: 50,
            time_limit_seconds: 30,
            cooldown_seconds: 60
        },
        leaderboard: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: true,
            max_entries: 10,
            show_avatars: true,
            time_periods: ['daily', 'weekly', 'monthly', 'all_time']
        },
        stats: {
            enable: true,
            permissions: ['@everyone'],
            allowed_channels: [],
            ephemeral: true,
            show_streak: true,
            show_accuracy: true,
            show_total_questions: true
        },
        categories: {
            general: {
                name: 'General Knowledge',
                emoji: '🧠',
                weight: 1.0
            },
            science: {
                name: 'Science',
                emoji: '🔬',
                weight: 1.2
            },
            history: {
                name: 'History',
                emoji: '📚',
                weight: 1.1
            },
            geography: {
                name: 'Geography',
                emoji: '🌍',
                weight: 1.1
            },
            entertainment: {
                name: 'Entertainment',
                emoji: '🎭',
                weight: 1.0
            },
            sports: {
                name: 'Sports',
                emoji: '⚽',
                weight: 1.0
            },
            technology: {
                name: 'Technology',
                emoji: '💻',
                weight: 1.3
            }
        },
        difficulty_multipliers: {
            easy: 1.0,
            medium: 1.5,
            hard: 2.0
        },
        streak_bonuses: {
            enable: true,
            bonus_xp_per_streak: 10,
            max_streak_bonus: 200
        }
    },
    general: {
        prefix: '!',
        language: 'en',
        timezone: 'Europe/Amsterdam',
        logging: {
            enable: true,
            log_level: 'info',
            log_commands: true,
            log_xp_events: true
        },
        maintenance: {
            enable: false,
            maintenance_message: 'Bot is under maintenance'
        },
        backup: {
            auto_backup: true,
            backup_interval_hours: 24,
            max_backups: 7
        },
        presence_dynamic: true,
        presence_text: 'Waiting for tunes...'
    },
    notifications: {
        level_up: {
            enable: true,
            channel: 'general',
            mention_user: true,
            show_progress: true,
            ephemeral: false
        },
        media_added: {
            enable: true,
            channel: 'media-updates',
            mention_user: false,
            ephemeral: false
        }
    },
    styling: {
        primary_color: '#c44545',
        secondary_color: '#34c7b8',
        accent_color: '#00ff88',
        background_color: '#282a2e',
        text_color: '#ffffff',
        font: 'Arial'
    },
    sanitization: {
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
                allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_&\\/]+$"
            },
            notes: {
                max_length: 1000,
                min_length: 0,
                allow_empty: true,
                remove_html: true,
                remove_special_chars: true,
                allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`\\n\\r]*$"
            },
            username: {
                max_length: 32,
                min_length: 1,
                allow_empty: false,
                remove_html: true,
                remove_special_chars: true,
                allowed_chars_pattern: "^[a-zA-Z0-9_\\-.]{1,32}$"
            },
            channel_name: {
                max_length: 100,
                min_length: 1,
                allow_empty: false,
                remove_html: true,
                remove_special_chars: true,
                allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_]+$"
            },
            role_name: {
                max_length: 100,
                min_length: 1,
                allow_empty: false,
                remove_html: true,
                remove_special_chars: true,
                allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_]+$"
            },
            reason: {
                max_length: 200,
                min_length: 1,
                allow_empty: false,
                remove_html: true,
                remove_special_chars: true,
                allowed_chars_pattern: "^[a-zA-Z0-9\\s\\-_.,!?@#$%^&*()+={}[\\]|\\\\:\";'<>\\/~`]*$"
            }
        },
        discord_ids: {
            user_id: { pattern: "^\\d{17,19}$", strict_validation: true },
            channel_id: { pattern: "^\\d{17,19}$", strict_validation: true },
            message_id: { pattern: "^\\d{17,19}$", strict_validation: true },
            role_id: { pattern: "^\\d{17,19}$", strict_validation: true }
        },
        numeric_validation: {
            xp_amount: { min: 0, max: 10000, allow_decimals: false, allow_negative: false },
            trivia_answer: { min: 0, max: 3, allow_decimals: false, allow_negative: false },
            level: { min: 1, max: 1000, allow_decimals: false, allow_negative: false },
            count: { min: 0, max: 1000000, allow_decimals: false, allow_negative: false }
        },
        enum_validation: {
            // media_type allowed_values are computed dynamically from config.media_types
            // Default values here for backward compatibility - actual validation uses config.media_types
            media_type: { allowed_values: ["films", "music", "games"], case_sensitive: false },
            category: { allowed_values: ["general", "films", "music", "games"], case_sensitive: false },
            difficulty: { allowed_values: ["easy", "medium", "hard"], case_sensitive: false }
        },
        malicious_content: {
            enable_detection: true,
            patterns: ["<script", "javascript:", "on\\w+\\s*=", "data:text\\/html", "vbscript:", "<iframe", "<object", "<embed", "<link", "<meta"],
            action: "remove" as const,
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
            log_level: "warn" as const,
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
    },
    music_monday: {
        enable: false,
        channel: 'general',
        post_time: '09:00',
        timezone: 'Europe/Amsterdam',
        search_terms: [
            'music', 'song', 'new music', 'indie music', 'rock music', 'pop music',
            'electronic music', 'jazz music', 'classical music', 'folk music',
            'alternative music', 'ambient music', 'chill music', 'upbeat music',
            'acoustic music', 'instrumental music', 'vocal music', 'cover song',
            'original music', 'underground music', 'emerging artist', 'new artist',
            'indie rock', 'indie pop', 'lo-fi music', 'synthwave', 'dream pop',
            'post-rock', 'shoegaze', 'indie folk', 'chillwave', 'bedroom pop'
        ],
        filters: {
            blacklist: {
                artists: ['Shakira'],
                genres: ['hardcore', 'death metal', 'screamo'],
                keywords: ['explicit', 'nsfw', 'adult']
            },
            whitelist: {
                artists: [],
                genres: [],
                keywords: []
            },
            enable_blacklist: true,
            enable_whitelist: false
        }
    },
    media_types: [
        {
            name: 'media',
            emoji: '🌐',
            color: 0x4ECDC4,
            thumbnail: 'https://example.com/general.png',
            collectionKey: 'media',
            modalId: 'media',
            showCreatorInTitle: false,
            fields: {
                title: 'Title',
                creator: 'Creator',
                genre: 'Genre',
            }
        },
        {
            name: 'films',
            emoji: '🎬',
            color: 0x4ECDC4,
            thumbnail: 'https://example.com/films.png',
            collectionKey: 'films',
            modalId: 'films',
            showCreatorInTitle: true,
            fields: {
                title: 'Title',
                creator: 'Director',
                genre: 'Genre',
            }
        },
        {
            name: 'music',
            emoji: '🎵',
            color: 0x4ECDC4,
            thumbnail: 'https://example.com/music.png',
            collectionKey: 'music',
            modalId: 'music',
            showCreatorInTitle: true,
            fields: {
                title: 'Title',
                creator: 'Artist',
                genre: 'Genre',
            }
        },
        {
            name: 'games',
            emoji: '🎮',
            color: 0x4ECDC4,
            thumbnail: 'https://example.com/games.png',
            collectionKey: 'games',
            modalId: 'games',
            showCreatorInTitle: true,
            fields: {
                title: 'Title',
                creator: 'Developer',
                genre: 'Genre',
            }
        },
        {
            name: 'books',
            emoji: '📚',
            color: 0x4ECDC4,
            thumbnail: 'https://example.com/books.png',
            collectionKey: 'books',
            modalId: 'books',
            showCreatorInTitle: true,
            fields: {
                title: 'Title',
                creator: 'Author',
                genre: 'Genre',
            }
        }
    ]
};
