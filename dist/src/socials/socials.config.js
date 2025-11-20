"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSocialConfig = void 0;
exports.defaultSocialConfig = {
    enable: true,
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
        show_progress_bar: true,
        show_category_breakdown: true
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
        show_avatars: true
    },
    rank: {
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
        show_rank_number: true
    },
    top_media: {
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
        max_entries: 5
    }
};
//# sourceMappingURL=socials.config.js.map