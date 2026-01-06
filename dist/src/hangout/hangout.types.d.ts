export interface HangoutConfig {
    room_url: string;
    room_uuid?: string;
    hangout_token?: string;
    channel: string;
    moderator_channel: string;
    role_assign: string;
    presence_dynamic: boolean;
    presence_text: string;
    auto_update: boolean;
    auto_update_interval: number;
    inactive_message: string;
    join_message: string;
    leave_message: string;
}
export interface HangoutListener {
    uuid: string;
    display_name: string;
    discord_user_id?: string;
}
export interface HangoutSong {
    artist: string;
    track: string;
    thumbnail?: string;
}
export interface HangoutActivity {
    room: string;
    current_song?: HangoutSong;
    current_dj?: string;
    current_listeners?: {
        [key: string]: HangoutListener;
    };
    djLineUp?: string[];
}
export interface HangoutActivityMessage {
    message: string;
    show_join_leave: boolean;
    show_current_song: boolean;
    show_current_dj: boolean;
    show_current_listeners: boolean;
}
export interface HangoutClientLink {
    id: number;
    guild_id: string;
    hangout_client_id: string;
    discord_user_id: string;
    client_name: string;
    room_url: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface HangoutUserData {
    uuid: string;
    username: string;
    avatar: string;
    time_in_room: number;
    time_as_dj: number;
    time_as_listener: number;
    songs_played: number;
    songs_liked: number;
    songs_disliked: number;
}
//# sourceMappingURL=hangout.types.d.ts.map