import { CommandConfig } from "../command/command.types";

export interface PingConfig extends CommandConfig {
    message: string;
}