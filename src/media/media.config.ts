import { MediaConfig } from "./media.types";

export const defaultMediaConfig: MediaConfig = {
    add_item: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: false,
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
        ephemeral: false,
    },
    update_item: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: false,
    },
    get: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
    },
    list: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
    },
    random: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
    },
    id: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: false,
    },
    stats: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false,
    }
}