"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEventsData = void 0;
exports.defaultEventsData = {
    events: [{
            enable: true,
            name: 'Music Monday',
            channel: 'music-monday',
            post_time: '10:00',
            timezone: 'Europe/Amsterdam',
            search_terms: [
                'music', 'song', 'new music', 'indie music', 'rock music', 'pop music',
                'electronic music', 'jazz music', 'classical music', 'folk music',
                'alternative music', 'ambient music', 'chill music', 'upbeat music',
                'acoustic music', 'instrumental music', 'vocal music', 'cover song',
                'original music', 'underground music', 'emerging artist', 'new artist',
                'indie rock', 'indie pop', 'lo-fi music', 'synthwave', 'dream pop',
                'post-rock', 'shoegaze', 'indie folk', 'chillwave', 'bedroom pop'
            ],
            filters: {
                blacklist: {
                    artists: ['Shakira'],
                    genres: ['hardcore', 'death metal', 'screamo'],
                    keywords: ['explicit', 'nsfw', 'adult']
                },
                whitelist: {
                    artists: [],
                    genres: [],
                    keywords: []
                },
                enable_blacklist: true,
                enable_whitelist: false
            }
        }]
};
//# sourceMappingURL=event.data.js.map