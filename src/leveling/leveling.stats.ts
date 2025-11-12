import { LevelingStats, LevelingUser } from "./leveling.types";

export const defaultLevelingStats: LevelingStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
}

export const defaultLevelingUser: LevelingUser = {
    user_id: '',
    username: '',
    last_message_time: 0,
    last_daily_bonus: 0,
    xp: {
        general: 0
    },
    total_level: 0,
    category_levels: {},
    category_stats: {},
    reaction_tracking: {}
}