import { CommandConfig } from "../command/command.types";
export interface GameConfig {
    enable: boolean;
    trigger: CommandConfig;
    leaderboard: CommandConfig & {
        max_entries: number;
    };
    peak: CommandConfig & {
        max_entries: number;
    };
    stats: CommandConfig & {
        show_user_triggers: boolean;
    };
    message_detection: {
        enable: boolean;
        trigger_keywords: string[];
    };
    message: {
        channel: string;
        mention_user: boolean;
        custom_message: string;
        cooldown: number;
        reaction_emoji: string;
        timeout_seconds?: number;
    };
}
export interface GameUser {
    user_id: string;
    username: string;
    total_triggers: number;
    current_score: number;
    peak_score: number;
    last_trigger_at: number;
    last_message_at: number;
    messages_today: number;
    messages_since_last_loss: number;
}
export interface GameStats {
    users: {
        [user_id: string]: GameUser;
    };
    leaderboards: {
        daily: {
            [user_id: string]: GameUser;
        };
        weekly: {
            [user_id: string]: GameUser;
        };
        monthly: {
            [user_id: string]: GameUser;
        };
        all_time: {
            [user_id: string]: GameUser;
        };
    };
    total_triggers: number;
    last_triggered_by: string;
    time_since_last_trigger: number;
}
//# sourceMappingURL=game.types.d.ts.map