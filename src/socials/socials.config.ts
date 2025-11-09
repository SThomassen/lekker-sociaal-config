import { SocialConfig } from "./socials.types";

export const defaultSocialConfig: SocialConfig = {
    stats: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        show_progress_bar: true,
        show_category_breakdown: true
    },
    leaderboard: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        max_entries: 10,
        show_avatars: true
    },
    rank: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        show_rank_number: true
    },
    top_media: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        max_entries: 5
    }
}