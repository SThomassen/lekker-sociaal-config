import { GameStats } from "./game.types";

export const defaultGameStats: GameStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
};