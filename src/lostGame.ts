import { CommandConfig } from "./core/botConfig";

export interface LostGameConfig {
    trigger: CommandConfig & {
        cooldown: number; // in milliseconds
        custom_message: string;
        reaction_emoji: string;
        timeout_seconds?: number; // 0 = permanent, > 0 = temporary (auto-delete after X seconds)
    };
    leaderboard: CommandConfig & {
        max_entries: number;
    };
    stats: CommandConfig & {
        show_user_triggers: boolean;
    };
    message_detection: {
        enable: boolean;
        trigger_keywords: string[];
        channel: string;
        mention_user: boolean;
        custom_message: string;
        cooldown: number; // in milliseconds
        reaction_emoji: string;
        timeout_seconds?: number; // 0 = permanent, > 0 = temporary (auto-delete after X seconds)
    };
}

export const defaultLostGameConfig: LostGameConfig = {
    trigger: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
        cooldown: 300000, // 5 minutes
        custom_message: "You lost the game! 😈",
        reaction_emoji: "😈",
        timeout_seconds: 0 // Default to permanent messages
    },
    leaderboard: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
        max_entries: 10
    },
    stats: {
        enable: true,
        permissions: ['Administrator', 'Moderator'],
        allowed_channels: [],
        ephemeral: true,
        show_user_triggers: true
    },
    message_detection: {
        enable: true,
        trigger_keywords: ['game'],
        channel: '',
        mention_user: true,
        custom_message: "I LOST THE GAME!",
        cooldown: 300000, // 5 minutes in milliseconds
        reaction_emoji: "😈",
        timeout_seconds: 0 // Default to permanent messages
    }
}