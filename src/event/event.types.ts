export interface Event {
    enable: boolean;
    name: string;
    channel: string;
    post_time: string;
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
