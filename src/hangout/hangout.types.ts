export interface HangoutConfig {
    room_url: string;
    room_uuid?: string; // The room UUID for socket connection (optional, can be extracted from room_url)
    hangout_token?: string; // JWT token for Hangout FM authentication (optional)
    channel: string; // The channel to send the hangout message to
    role_assign: string; // The role to assign to the users who are listening to the hangout
    presence_dynamic: boolean; // If true, the bot will update the presence text based on the hangout activity
    presence_text: string; // The text to display in the presence when presenceDynamic is false
    auto_update: boolean; // If true, the bot will automatically update the presence text based on the hangout activity
    auto_update_interval: number; // The interval in seconds to update the presence text
    inactive_message: string; // The message to display in the channel when the hangout is inactive
    join_message: string; // The message to display in the channel when a user joins the hangout
    leave_message: string; // The message to display in the channel when a user leaves the hangout
}

export interface HangoutActivity {
    room: string;
    current_song: string;
    current_dj: string;
    current_listeners: string[];
    current_playlist: string;
    current_playlist_duration: number;
    current_playlist_progress: number;
}

export interface HangoutActivityMessage {
    message: string;
    show_join_leave: boolean;
    show_current_song: boolean;
    show_current_dj: boolean;
    show_current_listeners: boolean;
    show_current_playlist: boolean;
    show_current_playlist_duration: boolean;
    show_current_playlist_progress: boolean;
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