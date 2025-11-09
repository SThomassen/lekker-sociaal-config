export interface CommandConfig {
    enable: boolean;
    permissions: string[];
    allowed_channels: string[];
    ephemeral: boolean;
}