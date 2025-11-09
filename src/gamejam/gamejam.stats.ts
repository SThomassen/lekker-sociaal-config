import { GameJamStats, GameJamStatsUser } from "./gamejam.types";

export const defaultGameJamStats: GameJamStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
};

export const defaultGameJamStatsUser: GameJamStatsUser = {
    userId: '',
    username: '',
    total_jams: [],
    completed_jams: [],
    cancelled_jams: [],
    total_time: 0,
    average_time: 0,
    best_time: 0,
    worst_time: 0
};