"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGameStats = exports.defaultGameUser = void 0;
exports.defaultGameUser = {
    user_id: '',
    username: '',
    total_triggers: 0,
    current_score: 0,
    peak_score: 0,
    last_trigger_at: 0,
    last_message_at: 0,
    messages_today: 0,
    messages_since_last_loss: 0
};
exports.defaultGameStats = {
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
//# sourceMappingURL=game.stats.js.map