import { LevelConfig } from "../level/level.types";
import { GameConfig } from "../game/game.types";
import { MediaConfig } from "../media/media.types";
import { SocialConfig } from "../socials/socials.types";
import { ChallengeConfig } from "../challenge/challenge.type";
import { TriviaConfig } from "../trivia/trivia.types";
import { GameJamConfig } from "../gamejam/gamejam.types";
import { SanitizationConfig } from "../sanitazion/sanitazion.types";
import { EventConfig } from "../event/event.types";
import { GeneralConfig } from "../general/general.types";
import { NotificationConfig } from "../notification/notification.types";
import { StylingConfig } from "../styling/styling.types";

// Bot Configuration Types
export interface CommandConfig {
    enable: boolean;
    permissions: string[];
    allowed_channels: string[]; // empty = all channels
    ephemeral?: boolean;
}

export interface BotConfig {
    game: GameConfig;
    media: MediaConfig;
    level: LevelConfig;
    social: SocialConfig;
    ping: CommandConfig;
    trivia: TriviaConfig;
    gamejam: GameJamConfig;
    challenge: ChallengeConfig;
    general: GeneralConfig;
    notifications: NotificationConfig;
    styling: StylingConfig;
    sanitization: SanitizationConfig;
    events: EventConfig[];
}
