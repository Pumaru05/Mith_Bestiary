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
    constructor (name, element, habitat, location) {
        name = "Fire Dragon";
        element = "Fire";
        habitat = "Fire Biomes";
        location = "Territories and hot and/or volcanic places"
    }
}

class race2 {
    constructor (name, element, habitat, location) {
        name = "Ice Dragon";
        element = "Ice";
        habitat = "Ice Biomes";
        location = "High and snowy mountains and/or deep and icy caves"
    }
}

export { drake };