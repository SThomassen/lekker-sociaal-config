export interface CommandConfig {
    enable: boolean;
    cooldown: number;
    permissions: PermissionConfig;
    ephemeral?: boolean;
}

export interface PermissionConfig {
    allowed_roles?: string[];
    ignored_roles?: string[];
    allowed_channels?: string[];
    ignored_channels?: string[];
    response_channel?: string;
}