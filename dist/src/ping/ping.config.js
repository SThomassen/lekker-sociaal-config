"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPingConfig = void 0;
exports.defaultPingConfig = {
    enable: true,
    cooldown: 0,
    permissions: {
        allowed_roles: ['@everyone'],
        ignored_roles: [],
        allowed_channels: [],
        ignored_channels: [],
        response_channel: '',
    },
    ephemeral: true,
    message: 'Pong!',
};
//# sourceMappingURL=ping.config.js.map