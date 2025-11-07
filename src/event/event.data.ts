import { EventsData } from "./event.types";

export const defaultEventsData: EventsData = {
    events: [{
        enable: true,
        name: 'Music Monday',
        channel: 'music-monday',
        post_time: '10:00',
        timezone: 'Europe/Amsterdam',
        search_terms: ['music', 'monday'],
        filters: {
            blacklist: {
                artists: [],
                genres: [],
                keywords: []
            },
            whitelist: {
                artists: [],
                genres: [],
                keywords: []
            },
            enable_blacklist: false,
            enable_whitelist: false
        }
    }]
}