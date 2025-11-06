// XP System Data Types (moved from xpConfig.ts)
export interface UserXPData {
    userId: string;
    username: string;
    lastMessageTime: number; // For cooldown tracking
    xp: {
        general: number;
        films: number;
        music: number;
        games: number;
    };
    totalLevel: number;
    categoryLevels: {
        films: number;
        music: number;
        games: number;
    };
}

// Combined User Data Structure for users.json
export interface CombinedUserData {
    userId: string;
    username: string;
    lastMessageTime: number; // For cooldown tracking
    lastDailyBonus: number; // Timestamp of last daily bonus claim
    xp: {
        general: number;
        [category: string]: number;
    };
    totalLevel: number;
    categoryLevels: {
        [category: string]: number;
    };
    categoryStats: {
        [category: string]: {
            mediaShared: number;
            reactionsReceived: { [emoji: string]: number };
            reactionsGiven: { [emoji: string]: number };
        };
    };
    reactionTracking: {
        [messageId: string]: {
            messageId: string;
            channelId: string;
            timestamp: number;
        };
    };
}

export interface UsersData {
    users: { [userId: string]: CombinedUserData };
}

