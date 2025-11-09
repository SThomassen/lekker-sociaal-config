import { GeneralConfig } from "./general.types";

export const defaultGeneralConfig: GeneralConfig = {
    language: 'en',
    timezone: 'Europe/Amsterdam',
    logging: {
        enable: true,
        log_level: 'info',
        log_commands: true,
        log_xp_events: true
    },
    maintenance: {
        enable: false,
        maintenance_message: 'Bot is under maintenance'
    },
    backup: {
        auto_backup: true,
        backup_interval_hours: 24,
        max_backups: 7
    },
    presence_dynamic: true,
    presence_text: 'Waiting for tunes...'
};