import { CommandConfig } from "../core/botConfig";

export interface GameConfig {
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