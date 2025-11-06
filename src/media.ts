import { CommandConfig } from "./core/botConfig";

export interface MediaStatsConfig extends CommandConfig {
    show_total_items: boolean;
    show_category_breakdown: boolean;
    show_top_contributors: boolean;
    max_contributors: number;
}

export interface MediaConfig {
    add_item: CommandConfig & {
        auto_detection?: {
            enable: boolean;
            min_confidence: number;
            platforms: {
                youtube: boolean;
                spotify: boolean;
                imdb: boolean;
                steam: boolean;
            };
        };
    };
    remove_item: CommandConfig;
    update_item: CommandConfig;
    get: CommandConfig;
    list: CommandConfig;
    random: CommandConfig;
    id: CommandConfig;
    stats: CommandConfig;
}

export interface MediaTypeConfig {
    name: string;
    emoji: string;
    color: number;
    thumbnail: string;
    collectionKey: string;
    modalId: string;
    showCreatorInTitle: boolean;
    fields: {
        title: string;
        creator?: string;
        genre?: string;
    };
}

export interface MediaData {
    id: string;
    name: string;
    moderatorAddedAt: string;
    notes?: string;
    url?: string;
    genre?: string;
    creator?: string;
    mediaType?: string; // Category of the media item
    // Discord-specific fields
    discordMessageId?: string;
    discordChannelId?: string;
    discordGuildId?: string;
    originalMessageAuthor?: string;
    originalMessageAuthorId?: string;
    originalMessageTimestamp?: string;
    moderatorAddedBy?: string;
}

export interface MediaCollection {
    [mediaType: string]: MediaData[];
}

export const defaultMediaCollection: MediaCollection = {
    films: [],
    music: [],
    games: [],
}

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