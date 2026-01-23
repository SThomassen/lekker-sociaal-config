import { ImageConfig } from "./image.types";

export const defaultImageConfig: ImageConfig = {
    enable: true,
    search: {
        enable: true,
        cooldown: 0,
        permissions: {
            allowed_roles: ['@everyone'],
            ignored_roles: [],
            allowed_channels: [],
            ignored_channels: [],
            response_channel: '',
        },
    },
    blacklist: [],
}