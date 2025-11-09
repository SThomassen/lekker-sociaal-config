import { CommandConfig } from "../command/command.types";

export interface MediaStatsConfig {
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
    list: CommandConfig & {
        items_per_page: number;
        show_filters: boolean;
    };
    random: CommandConfig;
    id: CommandConfig;
    stats: CommandConfig & MediaStatsConfig;
}

export interface MediaTypeData {
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
    mediaTypes: MediaTypeData[];
    media: {
        [mediaType: string]: MediaData[];
    }
}

export interface MediaStatsUser {
    userId: string;
    username: string;
    total_items: number;
    total_media_shared: number;
}

export interface MediaStats {
    users: { [userId: string]: MediaStatsUser };
    leaderboards: {
        daily: { [userId: string]: MediaStatsUser };
        weekly: { [userId: string]: MediaStatsUser };
        monthly: { [userId: string]: MediaStatsUser };
        all_time: { [userId: string]: MediaStatsUser };
    };
}