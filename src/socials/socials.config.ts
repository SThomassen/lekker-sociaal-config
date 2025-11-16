import { SocialConfig } from "./socials.types";

export const defaultSocialConfig: SocialConfig = {
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
}