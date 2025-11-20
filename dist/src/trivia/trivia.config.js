"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTriviaConfig = void 0;
exports.defaultTriviaConfig = {
    enable: true,
    trivia_api_url: 'https://opentdb.com/api.php',
    daily_question: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: false,
        xp_reward: 100,
        time_limit_seconds: 3600, // 1 hour
        post_time: '12:00',
        timezone: 'Europe/Amsterdam',
        auto_post: true,
        channel: 'general'
    },
    question: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
        xp_reward: 50,
        time_limit_seconds: 60, // 1 minute
        cooldown_seconds: 60 // 1 minute
    },
    leaderboard: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
        max_entries: 10,
        show_avatars: true,
        time_periods: ['daily', 'weekly', 'monthly', 'all_time']
    },
    stats: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
        show_streak: true,
        show_accuracy: true,
        show_total_questions: true
    },
    difficulty_multipliers: {
        easy: 1,
        medium: 1.5,
        hard: 2
    },
    streak_bonuses: {
        enable: true,
        bonus_xp_per_streak: 10,
        max_streak_bonus: 200
    }
};
//# sourceMappingURL=trivia.config.js.map