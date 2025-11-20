export declare function calculateLevel(xp: number, sqrtMultiplier?: number): number;
export declare function calculateXPForLevel(level: number, sqrtMultiplier?: number): number;
export declare function getXPProgress(currentXP: number, sqrtMultiplier?: number): {
    currentLevel: number;
    nextLevelXP: number;
    currentLevelXP: number;
    progress: number;
};
export declare function createProgressBar(progress: number, size?: number): string;
//# sourceMappingURL=utils.d.ts.map