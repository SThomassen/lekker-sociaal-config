import { NotificationConfig } from "./notification.types";

export const defaultNotificationConfig: NotificationConfig = {
    level_up: {
        enable: true,
        channel: 'general',
        mention_user: true,
        show_progress: true,
        ephemeral: false
    },
    media_added: {
        enable: true,
        channel: 'media-updates',
        mention_user: false,
        ephemeral: true
    }
};