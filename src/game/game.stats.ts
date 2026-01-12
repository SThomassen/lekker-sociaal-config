import { GameStats, GameUser } from "./game.types";

export const defaultGameUser: GameUser = {
    user_id: '',
    username: '',
    total_games: 0,
    total_triggers: 0,
    time_since_last_trigger: 0,
    current_score: 0,
    peak_score: 0,
    total_losses: 0,
    last_loss_at: 0,
    last_message_at: 0,
    messages_today: 0,
    last_message_date: undefined
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