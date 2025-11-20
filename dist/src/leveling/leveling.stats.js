"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLevelingUser = exports.defaultLevelingStats = void 0;
exports.defaultLevelingStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
};
exports.defaultLevelingUser = {
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
};
//# sourceMappingURL=leveling.stats.js.map