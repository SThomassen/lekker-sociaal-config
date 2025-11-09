import { MediaConfig } from "./media.types";

export const defaultMediaConfig: MediaConfig = {
    add_item: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
        auto_detection: {
            enable: true,
            min_confidence: 0.6,
            platforms: {
                youtube: true,
                spotify: true,
                imdb: true,
                steam: true,
            },
        },
    },
    remove_item: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
    },
    update_item: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
    },
    get: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
    },
    list: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        items_per_page: 10,
        show_filters: true,
    },
    random: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
    },
    id: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
    },
    stats: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        show_total_items: true,
        show_category_breakdown: true,
        show_top_contributors: true,
        max_contributors: 5,
    }
}
