"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHangoutActivityMessage = exports.defaultHangoutConfig = void 0;
exports.defaultHangoutConfig = {
    room_url: '',
    channel: 'general',
    role_assign: '',
    presence_dynamic: true,
    presence_text: 'Listening to Hangout',
    auto_update: true,
    auto_update_interval: 10,
    inactive_message: 'No activity in the hangout',
    join_message: '**{user}** joined the hangout',
    leave_message: '**{user}** left the hangout'
};
exports.defaultHangoutActivityMessage = {
    message: 'Listening to Hangout',
    show_join_leave: true,
    show_current_song: true,
    show_current_dj: true,
    show_current_listeners: true,
    show_current_playlist: true,
    show_current_playlist_duration: true,
    show_current_playlist_progress: true
};
//# sourceMappingURL=hangout.config.js.map