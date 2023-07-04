class drake {
    constructor (type, races, subraces, weapons, attack, body, personality) {
        type = "Lizards";
        races = drake_races;
        subraces = drake_subraces;
        weapons = drake_weapons;
        attack = drake_attacks;
        body = drakes_body;
        personality = drake_personalities;
    }
}

/*/-----------------------------------------------------------------------------------------------\
//|                                                                                               |
//|                                             DRAKE RACES                                       |
//|                                                                                               |
//\----------------------------------------------------------------------------------------------*/

class drake_races {
    constructor (idraces) {
        idraces = race;
    }
}

class race {
    constructor (idfDrake, idiDrake, idrace3, idrace4, idrace5) {
        idfDrake = FDrake;
        idiDrake = IDrake;
        idrace3 = race3;
        idrace4 = race4;
        idrace5 = race5;
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
    constructor (name, element, habitat, location, subrace) {
        name = "Ice Drake";
        element = "Ice";
        habitat = "Ice Biomes";
        location = "High and snowy mountains and/or deep and icy caves";
        subrace = ISubRace;
    }
}

class race3 {
    constructor (name, element, habitat, location) {
        name = "Electric Drake";
        element = "Electric";
        habitat = "Electric Biomes";
        location = "Electric and stormies skies and/or in the peak of electric or high magnetic zone mountains";
    }
}

class race4 {
    constructor (name, element, habitat, location) {
        name = "Terran Drake";
        element = "Life";
        habitat = "Anyone Biome with Life";
        location = "Places with zones of life, places with much earth or both places";
    }
}

class race5 {
    constructor (name, element, habitat, location) {
        name = "Dark Drake";
        element = "Death";
        habitat = "Swampies and Muddies Biomes";
        location = "Abandoned Swamps, Swamps with a lot of Death Aroma, places with a lot of dead and/or Swampy Sludge charged of dead bodies and Dreary sites."
    }
}

/*/-----------------------------------------------------------------------------------------------\
//|                                                                                               |
//|                                          DRAKE SUBRACES                                       |
//|                                                                                               |
//\----------------------------------------------------------------------------------------------*/

class drake_subraces {
    constructor (idFDrakeSRace, idIDrakeSRace, idemntsubrace3, idemntsubrace4, idemntsubrace5) {
        idFDrakeSRace = FSubRace;
        idIDrakeSRace = ISubRace;
        idemntsubrace3 = esubrace3;
        idemntsubrace4 = esubrace4;
        idemntsubrace5 = esubrace5;
        idDragonWalker = DragonWalker;
    }
}

class FSubRace {
    constructor (idFSubrace1, idFSubrace2, idFSubrace3, idFSubrace4, idFSubrace5) {
        idFSubrace1 = fireSubrace1;
        idFSubrace2 = fireSubrace2;
        idFSubrace3 = fireSubrace3;
        idFSubrace4 = fireSubrace4;
    }
}

class fireSubrace1 {
    constructor (Name, race, element, habitat, location) {
        Name = "Desert Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Desert biomes, dry and hot temperatures";
        location = "Habitats lacking water and moisture sources"
    }
}

class fireSubrace2 {
    constructor (name, race, element, habitat, location) {
        name = "Volcanic Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Volcanic biomes and/or ashy and arid terrains"
        location = "Lives in the slopes of the volcano, especially, where volcanic rocks and ash from ancient eruptions around"
    }
}

class fireSubrace3 {
    constructor (name, race, element, habitat, location) {
        name = "Lava Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Volcanic biomes, but, the volcano must be activated";
        location = "Lives inside the volcanos, eating lava and magma";
    }
}

class fireSubrace4 {
    constructor (name, race, element, habitat, location) {
        name = "Solar Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Sunny biomes, especially, where places have the sun constantly emitting light";
        location = "Lives in zones where the sky is clear and the zones are rich in foods and culture";
    }
}


class ISubRace {
    constructor (idISubrace1, idISubrace2, idISubrace3, idISubrace4) {
        idISubrace1 = iceSubrace1;
        idISubrace2 = iceSubrace2;
        idISubrace3 = iceSubrace3;
        idISubrace4 = iceSubrace4;
    }
}

class iceSubrace1 {
    constructor (name, race, element, habitat, location) {
        name = "Ice Mountain Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Ices and snowies biomes, where places have constantly ice and snow";
        location = "Lives in the snowies mountain's peakes and in the forgotten and deep cold caves";
    }
}

class iceSubrace2 {
    constructor (name, race, element, habitat, location) {
        name = "Glaciar Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Artic biomes and biomes with much glaciars.";
        location = "Lives in artic seas, on the cold glaciars.";
    }
}

class iceSubrace3 {
    constructor (name, race, element, habitat, location) {
        name = "Snowy Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Snow biomes.";
        location = "Lives in plains arounded of Snow and very low temperatures.";
    }
}

class iceSubrace4 {
    constructor (name, race, element, habitat, location) {
        name = "Spectral Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Graveyard and deathly biomes.";
        location = "Lives in graveyards, scare and haunted ambients.";
    }
}

export { drake };