import { CommandConfig } from "../command/command.types";
export interface MediaStatsConfig {
    show_total_items: boolean;
    show_category_breakdown: boolean;
    show_top_contributors: boolean;
    max_contributors: number;
}
export interface MediaConfig {
    enable: boolean;
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
    add_item: CommandConfig;
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
export interface MediaType {
    name: string;
    emoji: string;
    color: number;
    thumbnail: string;
    collection_key: string;
    modal_id: string;
    show_creator_in_title: boolean;
    fields: {
        title: string;
        creator?: string;
        genre?: string;
    };
}
export interface MediaItem {
    id: string;
    name: string;
    moderator_added_at: string;
    notes?: string;
    url?: string;
    genre?: string;
    creator?: string;
    media_type?: string;
    discord_message_id?: string;
    discord_channel_id?: string;
    discord_guild_id?: string;
    original_message_author?: string;
    original_message_author_id?: string;
    original_message_timestamp?: string;
    moderator_added_by?: string;
    reaction_count?: number;
}
export interface MediaCollection {
    media_types: MediaType[];
    media: {
        [media_type: string]: MediaItem[];
    };
}
export interface MediaStatsUser {
    user_id: string;
    username: string;
    total_items: number;
    total_media_shared: number;
}
export interface MediaStats {
    users: {
        [user_id: string]: MediaStatsUser;
    };
    leaderboards: {
        daily: {
            [user_id: string]: MediaStatsUser;
        };
        weekly: {
            [user_id: string]: MediaStatsUser;
        };
        monthly: {
            [user_id: string]: MediaStatsUser;
        };
        all_time: {
            [user_id: string]: MediaStatsUser;
        };
    };
}
//# sourceMappingURL=media.types.d.ts.map