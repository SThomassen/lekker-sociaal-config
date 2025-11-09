import { GameJamConfig } from "./gamejam.types";

export const defaultGameJamConfig: GameJamConfig = {
    enable: true,
    start: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: false,
        announcement_channel: 'general',
        max_duration_days: 30,
        min_duration_days: 1,
        default_theme_pool: 'default'
    },
    status: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: false
    },
    join: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true
    },
    end: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: false,
        announcement_channel: 'general'
    },
    suggest_theme: {
        enable: true,
        permissions: ['@everyone'],
        allowed_channels: [],
        ephemeral: true,
        pool: 'default'
    },
}