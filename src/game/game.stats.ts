import { GameStats, GameUser } from "./game.types";

export const defaultGameUser: GameUser = {
    user_id: '',
    username: '',
    total_triggers: 0,
    last_score: 0,
    peak_score: 0,
    last_trigger_at: 0,
    last_message_at: 0,
    messages_today: 0,
    messages_since_last_loss: 0
};

export const defaultGameStats: GameStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    },
    total_triggers: 0,
    last_triggered_by: '',
    time_since_last_trigger: 0
};