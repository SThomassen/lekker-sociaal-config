import { GameConfig } from "./game.types";

export const defaultGameConfig: GameConfig = {
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