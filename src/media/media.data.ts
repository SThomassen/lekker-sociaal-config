import { MediaCollection, MediaType } from "./media.types";

export const mediaTypeFilm: MediaType = {
    name: 'films',
    emoji: '🎬',
    color: 0x4ECDC4,
    thumbnail: 'https://example.com/films.png',
    collectionKey: 'films',
    modalId: 'films',
    showCreatorInTitle: false,
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
    collectionKey: 'music',
    modalId: 'music',
    showCreatorInTitle: true,
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
    collectionKey: 'games',
    modalId: 'games',
    showCreatorInTitle: false,
    fields: {
        title: 'Title',
        creator: 'Developer',
        genre: 'Genre',
    }
}

export const defaultMediaCollection: MediaCollection = {
    mediaTypes: [
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