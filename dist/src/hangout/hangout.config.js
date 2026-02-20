"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHangoutActivityMessage = exports.defaultHangoutConfig = void 0;
exports.defaultHangoutConfig = {
    room_url: 'https://hang.fm/da/lekker-muziek-6452',
    room_uuid: 'lekker-muziek-6452', // Extracted from room_url
    channel: 'samen-luisteren',
    moderator_channel: 'hangout-moderator',
    role_assign: 'Lekker luisteren',
    presence_dynamic: true,
    presence_text: 'Join us on Hangout FM',
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
};
//# sourceMappingURL=hangout.config.js.map