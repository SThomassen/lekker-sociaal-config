import { MediaCollection, MediaType } from "./media.types";

export const mediaTypeFilm: MediaType = {
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
}

export const mediaTypeMusic: MediaType = {
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
}

export const mediaTypeGame: MediaType = {
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
}

export const defaultMediaCollection: MediaCollection = {
    media_types: [
        mediaTypeFilm,
        mediaTypeMusic,
        mediaTypeGame,
    ],
    media: {
        films: [],
        music: [],
        games: [],
    }
}