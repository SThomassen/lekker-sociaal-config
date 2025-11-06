// XP → Level
export function calculateLevel(xp: number, sqrtMultiplier: number = 0.2): number {
    // Start op level 1 bij 0 XP, level 2 bij ±100 XP
    const adjustedXP = Math.max(0, xp / 4); // 100 XP -> sqrt(25)
    return Math.floor(sqrtMultiplier * Math.sqrt(adjustedXP)) + 1;
}

// Level → XP
export function calculateXPForLevel(level: number, sqrtMultiplier: number = 0.2): number {
    // Inverse van bovenstaande
    const adjustedLevel = Math.max(0, level - 1);
    return Math.ceil(Math.pow((adjustedLevel / sqrtMultiplier), 2) * 4);
}

export function getXPProgress(currentXP: number, sqrtMultiplier: number = 0.2): {
    currentLevel: number;
    nextLevelXP: number;
    currentLevelXP: number;
    progress: number;
} {
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

export function createProgressBar(progress: number, size: number = 10): string {
    const total = 10;
    const filled = Math.round(progress * total);
    const empty = total - filled;
    return `▰`.repeat(filled) + `▱`.repeat(empty);
}