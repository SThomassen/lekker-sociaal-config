import { ChallengeConfig } from "./challenge.type";

export const defaultChallengeConfig: ChallengeConfig = {
    add: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true
    },
    remove: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true
    },
    update: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true
    },
    list: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true
    },
    get: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true
    },
    random: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true
    },
    admin: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true
    }
};