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

export interface GameJamData {
    id: string;
    name: string;
    description: string;
    theme: string;
    duration: number; // in days
    startTime: number; // timestamp
    endTime: number; // timestamp
    createdBy: string; // user ID
    createdByUsername: string;
    participants: string[]; // user IDs
    status: 'active' | 'completed' | 'cancelled';
    scheduledEventId?: string; // Discord scheduled event ID
    announcementMessageId?: string; // Discord message ID
    announcementChannelId?: string; // Discord channel ID
}

export interface GameJamStorage {
    active_jams: { [jamId: string]: GameJamData };
    completed_jams: { [jamId: string]: GameJamData };
    suggested_themes: { [poolName: string]: string[] }; // Multiple suggestion pools
}