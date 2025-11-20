"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMediaCollection = exports.mediaTypeGame = exports.mediaTypeMusic = exports.mediaTypeFilm = void 0;
exports.mediaTypeFilm = {
    name: 'films',
    emoji: '🎬',
    color: 0x4ECDC4,
    thumbnail: 'https://example.com/films.png',
    collection_key: 'films',
    modal_id: 'films',
    show_creator_in_title: false,
    fields: {
        title: 'Title',
        creator: 'Director',
        genre: 'Genre',
    }
};
exports.mediaTypeMusic = {
    name: 'music',
    emoji: '🎵',
    color: 0x4ECDC4,
    thumbnail: 'https://example.com/music.png',
    collection_key: 'music',
    modal_id: 'music',
    show_creator_in_title: true,
    fields: {
        title: 'Title',
        creator: 'Artist',
        genre: 'Genre',
    }
};
exports.mediaTypeGame = {
    name: 'games',
    emoji: '🎮',
    color: 0x4ECDC4,
    thumbnail: 'https://example.com/games.png',
    collection_key: 'games',
    modal_id: 'games',
    show_creator_in_title: false,
    fields: {
        title: 'Title',
        creator: 'Developer',
        genre: 'Genre',
    }
};
exports.defaultMediaCollection = {
    media_types: [
        exports.mediaTypeFilm,
        exports.mediaTypeMusic,
        exports.mediaTypeGame,
    ],
    media: {
        films: [],
        music: [],
        games: [],
    }
};
//# sourceMappingURL=media.data.js.map