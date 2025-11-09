export interface PingConfig {
    enable: boolean;
    permissions: string[];
    allowed_channels: string[];
    ephemeral: boolean;
    message: string;
}