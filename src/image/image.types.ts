import { CommandConfig } from "../command/command.types";

export interface ImageConfig {
    enable: boolean;
    search: CommandConfig;
    blacklist: string[];
}