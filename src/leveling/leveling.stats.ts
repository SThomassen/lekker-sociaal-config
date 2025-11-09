import { LevelingStats, LevelingStatsUser } from "./leveling.types";

export const defaultLevelingStats: LevelingStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
}
