import { lizard } from "../lizard.js";
import { race } from "races/race.js";
import { drake_subraces } from "/subraces/subrace.js";

class drake {
    constructor (type, races, subraces, weapons, attack, body, personality) {
        type = lizard;
        races = race;
        subraces = drake_subraces;
        weapons = drake_weapons;
        attack = drake_attacks;
        body = drakes_body;
        personality = drake_personalities;
    }
}

export { drake };