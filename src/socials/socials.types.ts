import { CommandConfig } from "../command/command.types";

export interface SocialConfig {
    stats: CommandConfig & {
        show_progress_bar: boolean;
        show_category_breakdown: boolean;
    };
    leaderboard: CommandConfig & {
        max_entries: number;
        show_avatars: boolean;
    };
    rank: CommandConfig & {
        show_rank_number: boolean;
    };
    top_media: CommandConfig & {
        max_entries: number;
    };
}