import { ChallengeConfig } from "./challenge.types";

export const defaultChallengeConfig: ChallengeConfig = {
    add: {
        enable: true,
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