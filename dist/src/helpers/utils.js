"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLevel = calculateLevel;
exports.calculateXPForLevel = calculateXPForLevel;
exports.getXPProgress = getXPProgress;
exports.createProgressBar = createProgressBar;
// XP → Level
function calculateLevel(xp, sqrtMultiplier = 0.2) {
    // Start op level 1 bij 0 XP, level 2 bij ±100 XP
    const adjustedXP = Math.max(0, xp / 4); // 100 XP -> sqrt(25)
    return Math.floor(sqrtMultiplier * Math.sqrt(adjustedXP)) + 1;
}
// Level → XP
function calculateXPForLevel(level, sqrtMultiplier = 0.2) {
    // Inverse van bovenstaande
    const adjustedLevel = Math.max(0, level - 1);
    return Math.ceil(Math.pow((adjustedLevel / sqrtMultiplier), 2) * 4);
}
function getXPProgress(currentXP, sqrtMultiplier = 0.2) {
    const currentLevel = calculateLevel(currentXP, sqrtMultiplier);
    const nextLevelXP = calculateXPForLevel(currentLevel + 1, sqrtMultiplier);
    const currentLevelXP = calculateXPForLevel(currentLevel, sqrtMultiplier);
    const progress = (currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP);
    return {
        currentLevel,
        nextLevelXP,
        currentLevelXP,
        progress: Math.max(0, Math.min(1, progress))
    };
}
function createProgressBar(progress, size = 10) {
    const total = 10;
    const filled = Math.round(progress * total);
    const empty = total - filled;
    return `▰`.repeat(filled) + `▱`.repeat(empty);
}
//# sourceMappingURL=utils.js.map