// Importing Classes
import {bird} from "birds/bird.js";
import {lizard} from "lizards/lizard.js";
import {mamifer} from "mamifers/mamifer.js";

// Importing JSONs
    // JSON Habits
    var attacks_types  = "JSONs/habits/attackingTypes/attackingTypes.json";
    var drinking_types = "JSONs/habits/drinkingTypes/drinkingTypes.json";
    var eating_types   = "JSONs/habits/eatingTypes/eatingTypes.json";
    var running_types  = "JSONs/habits/runningTypes/runningTypes.json";
    var sleep_habits   = "JSONs/habits/sleepHabits/sleepingHabits.json";
    var walking_types  = "JSONs/habits/walkingTypes/walkingTypes.json";

    // JSON Characteristics
    var addaptations_types = "JSONs/characteristics/addaptationsTypes/addaptationsTypes.json";
    var defenses_types     = "JSONs/characteristics/defensesTypes/defensesTypes.json";
    var weapons_types      = "JSONs/characteristics/weaponTypes/weaponTypes.json";

//

class animal {
    constructor (types, habits, characteristics) {
        types           = animal_types;
        habits          = animal_habits;
        characteristics = animal_characteristics;
    }
}

class animal_types {
    constructor (type_1, type_2, type_3) {
        type_1 = bird;
        type_2 = lizard;
        type_3 = mamifer;
    }
}

class animal_habits {
    constructor (sleep, walk, eat, drink, run, attacks) {
        sleep = sleep_habits;
        walk = walking_types;
        eat = eating_types;
        drink = drinking_types;
        run = running_types;
        attacks = attacks_types;
    }
}

class animal_characteristics {
    constructor (weapons, defenses, addaptations, ) {
        weapons      = weapons_types;
        defenses     = defenses_types;
        addaptations = addaptations_types;
    }
}

export { sleep_habits, walking_types, eating_types, drinking_types, running_types, attacks_types,
         weapons_types, defenses_types, addaptations_types };