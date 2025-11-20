import { ChallengeConfig } from "./challenge.types";

export const defaultChallengeConfig: ChallengeConfig = {
    enable: true,
    add: {
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
    remove: {
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
    update: {
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
    list: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    get: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    random: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
        ephemeral: true
    },
    admin: {
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
};