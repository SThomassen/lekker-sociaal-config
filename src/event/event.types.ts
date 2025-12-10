import { CommandConfig } from "../command/command.types";

export interface Event {
    enable: boolean;
    id: string;
    name: string;
    description: string;
    channel: string;
    post_time: string;
    post_day: number;
    frequency: 'daily' | 'weekly' | 'monthly';
    timezone: string;
    search_terms: string[];
    filters: {
        blacklist: {
            artists: string[];
            genres: string[];
            keywords: string[];
        };
        whitelist: {
            artists: string[];
            genres: string[];
            keywords: string[];
        };
        enable_blacklist: boolean;
        enable_whitelist: boolean;
    };
}

export interface EventsData {
    events: Event[];
}

export interface EventConfig {
    enable: boolean;
    list: CommandConfig;
    trigger: CommandConfig;
    start: CommandConfig;
    stop: CommandConfig;
}