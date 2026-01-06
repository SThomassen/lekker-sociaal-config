export interface HangoutConfig {
    room_url: string;
    room_uuid?: string; // The room UUID for socket connection (optional, can be extracted from room_url)
    hangout_token?: string; // JWT token for Hangout FM authentication (optional)
    channel: string; // The channel to send the hangout message to
    moderator_channel: string; // The channel to send the moderator messages to
    role_assign: string; // The role to assign to the users who are listening to the hangout
    presence_dynamic: boolean; // If true, the bot will update the presence text based on the hangout activity
    presence_text: string; // The text to display in the presence when presenceDynamic is false
    auto_update: boolean; // If true, the bot will automatically update the presence text based on the hangout activity
    auto_update_interval: number; // The interval in seconds to update the presence text
    inactive_message: string; // The message to display in the channel when the hangout is inactive
    join_message: string; // The message to display in the channel when a user joins the hangout
    leave_message: string; // The message to display in the channel when a user leaves the hangout
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
    current_dj?: string; // The UUID of the current DJ, use current_listeners[uuid] to get the displayName
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