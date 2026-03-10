"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultChallengeData = void 0;
const challenge_code_1 = require("./challenges/challenge.code");
const challenge_draw_1 = require("./challenges/challenge.draw");
const challenge_modeling_1 = require("./challenges/challenge.modeling");
const challenge_music_1 = require("./challenges/challenge.music");
const challenge_game_1 = require("./challenges/challenge.game");
exports.defaultChallengeData = {
    'code': challenge_code_1.codeChallenges,
    'draw': challenge_draw_1.drawChallenges,
    'modeling': challenge_modeling_1.ModelingChallenges,
    'music': challenge_music_1.musicChallenges,
    'game': challenge_game_1.GameChallenges
};
//# sourceMappingURL=challenge.data.js.map