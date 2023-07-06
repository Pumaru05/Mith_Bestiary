import { TSubRace } from "../../subraces/terranSubraces/terranSubrace.js";

class TDrake {
    constructor (nameRace, element, habitat, location, subrace) {
        nameRace = "Terran Drake";
        element = "Life";
        habitat = "Anyone Biome with Life";
        location = "Places with zones of life, places with much earth or both places";
        subrace = TSubRace;
    }
}

export { TDrake };