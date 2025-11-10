import { ChallengeData } from "./challenge.types";
import { codeChallenges } from "./challenges/challenge.code";
import { drawChallenges } from "./challenges/challenge.draw";
import { ModelingChallenges } from "./challenges/challenge.modeling";
import { musicChallenges } from "./challenges/challenge.music";
import { GameChallenges } from "./challenges/challenge.game";

export const defaultChallengeData: ChallengeData = {
    'code': codeChallenges,
    'draw': drawChallenges,
    'modeling': ModelingChallenges,
    'music': musicChallenges,
    'game': GameChallenges
};

