import { UserStatsData, UsersData } from "./level.types";

export const defaultUsersData: UsersData = {
    users: {}
}

export const defaultUserStatsData: UserStatsData = {
    users: {},
    leaderboards: {
        daily: {},
        weekly: {},
        monthly: {},
        all_time: {}
    }
}