export interface GeneralConfig {
    language: string;
    timezone: string;
    logging: {
        enable: boolean;
        log_level: 'debug' | 'info' | 'warn' | 'error';
        log_commands: boolean;
        log_xp_events: boolean;
    };
    maintenance: {
        enable: boolean;
        maintenance_message: string;
    };
    backup: {
        auto_backup: boolean;
        backup_interval_hours: number;
        max_backups: number;
    };
    presence_dynamic: boolean;
    presence_text: string;
}