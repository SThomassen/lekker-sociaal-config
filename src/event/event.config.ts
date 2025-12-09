import { EventConfig } from "./event.types";

export const defaultEventConfig: EventConfig = {
    enable: true,
    list: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    trigger: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    start: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    stop: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['Administrator', 'Moderator'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    }
}