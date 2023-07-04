import { lizard } from "../lizard.js";
import { drake_subraces } from "/subraces/subrace.js";
import { FSubRace } from "/fireSubraces/fireSubrace.js";
import { ISubRace } from "/iceSubraces/iceSubrace.js";

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

class race {
    constructor (idfDrake, idiDrake, ideDrake, idtDrake, iddaDrake) {
        idfDrake = FDrake;
        idiDrake = IDrake;
        ideDrake = EDrake;
        idtDrake = TDrake;
        iddaDrake = DaDrake;
    }
}

class FDrake {
    constructor (nameRace, element, habitat, location, subrace) {
        nameRace = "Fire Drake";
        element = "Fire";
        habitat = "Fire Biomes";
        location = "Hot and/or volcanic places and territories";
        subrace = FSubRace;
    }
}

class IDrake {
    constructor (nameRace, element, habitat, location, subrace) {
        nameRace = "Ice Drake";
        element = "Ice";
        habitat = "Ice Biomes";
        location = "High and snowy mountains and/or deep and icy caves";
        subrace = ISubRace;
    }
}

class EDrake {
    constructor (nameRace, element, habitat, location) {
        nameRace = "Electric Drake";
        element = "Electric";
        habitat = "Electric Biomes";
        location = "Electric and stormies skies and/or in the peak of electric or high magnetic zone mountains";
    }
}

class TDrake {
    constructor (nameRace, element, habitat, location) {
        nameRace = "Terran Drake";
        element = "Life";
        habitat = "Anyone Biome with Life";
        location = "Places with zones of life, places with much earth or both places";
    }
}

class DaDrake {
    constructor (nameRace, element, habitat, location) {
        nameRace = "Dark Drake";
        element = "Death";
        habitat = "Swampies and Muddies Biomes";
        location = "Abandoned Swamps, Swamps with a lot of Death Aroma, places with a lot of dead and/or Swampy Sludge charged of dead bodies and Dreary sites."
    }
}

export { drake, FDrake, IDrake, EDrake, TDrake, DaDrake };