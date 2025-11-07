import { ChallengeConfig } from "./challenge.type";

export const defaultChallengeConfig: ChallengeConfig = {
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