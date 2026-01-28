export type AppId = number;

export interface RequestSteamAPIProps {
    interfaceName: string;
    methodName: string;
    version?: string;
    apiKey?: string;
    format?: string;
    steamid?: string | undefined;
    params?: Record<string, any>;
}

export interface SteamUser {
    id: string;
    username: string;
    steamid: string;
}

export interface OwnedGame {
    appid: AppId;
    name: string;

    playtime_forever: number;
    playtime_2weeks?: number;

    img_icon_url?: string;
    img_logo_url?: string;
}

export interface OwnedGamesPerUser {
    user: SteamUser;
    games: OwnedGame[];
}

export interface SteamCategory {
    id: number;
    description: string;
}

export interface SteamGenre {
    id: string;
    description: string;
}

export interface SteamAppDetails {
    steam_appid: AppId;
    name: string;
    type: 'game' | 'dlc' | 'demo' | string;

    is_free: boolean;
    required_age: number;

    short_description: string;
    about_the_game?: string;

    header_image?: string;
    capsule_image?: string;

    developers?: string[];
    publishers?: string[];

    release_date?: {
        coming_soon: boolean;
        date: string;
    };

    platforms?: {
        windows: boolean;
        mac: boolean;
        linux: boolean;
    };

    categories?: SteamCategory[];
    genres?: SteamGenre[];

    recommendations?: {
        total: number;
    };
}

export interface CachedAppDetails {
    appid: AppId;
    fetchedAt: number;
    data: SteamAppDetails;
}