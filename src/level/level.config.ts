import { LevelConfig } from "./level.types";

export const defaultLevelConfig: LevelConfig = {
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
            }
        },
        remove_on_level_down: false,
        notify_on_assignment: true
    },
    daily_bonus: {
        enable: true,
        xp_amount: 100,
        reset_hour: 0
    },
    allowed_emotes: {
        enable_filtering: false,
        allowed_emotes: []
    }
}