export interface HangoutConfig {
    room_url: string;
    channel: string;
    role_assign: string;
    presence_dynamic: boolean;
    presence_text: string;
    auto_update: boolean;
    auto_update_interval: number;
    inactive_message: string;
    join_message: string;
    leave_message: string;
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
//# sourceMappingURL=hangout.types.d.ts.map