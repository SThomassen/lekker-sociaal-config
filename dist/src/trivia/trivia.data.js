"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTriviaData = void 0;
const trivia_general_1 = require("./questions/trivia.general");
const trivia_science_1 = require("./questions/trivia.science");
const trivia_history_1 = require("./questions/trivia.history");
const trivia_geography_1 = require("./questions/trivia.geography");
const trivia_entertainment_1 = require("./questions/trivia.entertainment");
const trivia_sports_1 = require("./questions/trivia.sports");
const trivia_technology_1 = require("./questions/trivia.technology");
exports.defaultTriviaData = {
    general: trivia_general_1.generalQuestions,
    science: trivia_science_1.scienceQuestions,
    history: trivia_history_1.historyQuestions,
    geography: trivia_geography_1.geographyQuestions,
    entertainment: trivia_entertainment_1.entertainmentQuestions,
    sports: trivia_sports_1.sportsQuestions,
    technology: trivia_technology_1.technologyQuestions,
};
//# sourceMappingURL=trivia.data.js.map