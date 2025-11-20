"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGameConfig = void 0;
exports.defaultGameConfig = {
    trigger: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
    },
    leaderboard: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
        max_entries: 10
    },
    stats: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true,
        show_user_triggers: true
    },
    message_detection: {
        enable: true,
        trigger_keywords: ['game'],
    },
    message: {
        channel: '',
        mention_user: true,
        custom_message: "I LOST THE GAME!",
        cooldown: 300000, // 5 minutes in milliseconds
        reaction_emoji: "😈",
        timeout_seconds: 0 // Default to permanent messages
    }
};
//# sourceMappingURL=game.config.js.map