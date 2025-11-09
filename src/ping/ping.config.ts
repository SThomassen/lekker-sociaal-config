import { PingConfig } from "./ping.types";

export const defaultPingConfig: PingConfig = {
    enable: true,
    permissions: ['@everyone'],
    allowed_channels: [],
    ephemeral: true,
    message: 'Pong!',
}