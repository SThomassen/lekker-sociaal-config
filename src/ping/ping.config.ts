import { PingConfig } from "./ping.types";

export const defaultPingConfig: PingConfig = {
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
}