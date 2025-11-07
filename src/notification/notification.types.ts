export interface NotificationConfig {
    level_up: {
        enable: boolean;
        channel: string;
        mention_user: boolean;
        show_progress: boolean;
        ephemeral: boolean;
    };
    media_added: {
        enable: boolean;
        channel: string;
        mention_user: boolean;
        ephemeral: boolean;
    };
}