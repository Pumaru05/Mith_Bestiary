// IMPORT RACES
    import { bird } from "birds/bird.js";
    import { lizard } from "lizards/lizard.js";
    import { mamifer } from "mamifers/mamifer.js";

// IMPORT JSONs
    //JSON CHARACTERISTICS
    import { addaptations_types, defenses_types, weapons_types } from "../JSONs/json.js";

    //JSON HABITS
    import { attacks_types, drinking_types, eating_types, running_types, sleep_habits,
             walking_types } from "../JSONs/json.js";

// DECLARING THE CLASSES AND FUNCTIONS
function beast() {
    class beast {
        constructor (types, habits, characteristics) {
            types           = beast_types;
            habits          = beast_habits;
            characteristics = beast_characteristics;
        }
    }
}

class beast_types {
    constructor (type_1, type_2, type_3) {
        type_1 = bird;
        type_2 = lizard;
        type_3 = mamifer;
    }
}

class beast_habits {
    constructor (sleep, walk, eat, drink, run, attacks) {
        sleep = sleep_habits;
        walk = walking_types;
        eat = eating_types;
        drink = drinking_types;
        run = running_types;
        attacks = attacks_types;
    }
}

class beast_characteristics {
    constructor (weapons, defenses, addaptations, ) {
        weapons      = weapons_types;
        defenses     = defenses_types;
        addaptations = addaptations_types;
    }
}

// EXPORTING THE BEASTS
export { beast };