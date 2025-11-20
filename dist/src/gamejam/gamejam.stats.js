"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGameJamUser = exports.defaultGameJamStats = void 0;
exports.defaultGameJamStats = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
};
exports.defaultGameJamUser = {
    user_id: '',
    username: '',
    total_jams: [],
    completed_jams: [],
    cancelled_jams: [],
    total_time: 0,
    average_time: 0,
    best_time: 0,
    worst_time: 0
};
//# sourceMappingURL=gamejam.stats.js.map