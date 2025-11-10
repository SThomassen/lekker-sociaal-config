import { GameStats } from "./game.types";

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
    time_since_last_trigger: ''
};