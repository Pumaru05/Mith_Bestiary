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
    constructor (id_races) {
        id_races = id_race;
    }
}

class id_race {
    constructor (idrace1, idrace2, idrace3, idrace4, idrace5) {
        idrace1 = race1;
        idrace2 = race2;
        idrace3 = race3;
        idrace4 = race4;
        idrace5 = race5;
    }
}

class race1 {
    constructor (name, element, habitat, location, subrace) {
        name = "Fire Drake";
        element = "Fire";
        habitat = "Fire Biomes";
        location = "Hot and/or volcanic places and territories";
        subrace = esubrace1;
    }
}

class race2 {
    constructor (name, element, habitat, location) {
        name = "Ice Drake";
        element = "Ice";
        habitat = "Ice Biomes";
        location = "High and snowy mountains and/or deep and icy caves";
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
    constructor (idemntsubrace1, idemntsubrace2, idemntsubrace3, idemntsubrace4, idemntsubrace5) {
        idemntsubrace1 = esubrace1;
        idemntsubrace2 = esubrace2;
        idemntsubrace3 = esubrace3;
        idemntsubrace4 = esubrace4;
        idemntsubrace5 = esubrace5;
    }
}

class esubrace1 {
    constructor (idsubrace1, idsubrace2, idsubrace3, idsubrace4, idsubrace5) {
        idsubrace1 = idsrace1;
        idsubrace2 = idsrace2;
        idsubrace3 = idsrace3;
        idsubrace4 = idsrace4;
        idsubrace5 = idsrace5;
    }
}

export { drake };