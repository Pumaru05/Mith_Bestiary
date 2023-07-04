import { IDrake } from "../../../drakes.js";

class SpecDrake {
    constructor (name, race, element, habitat, location) {
        name = "Spectral Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Graveyard and deathly biomes.";
        location = "Lives in graveyards, scare and haunted ambients.";
    }
}

export { SpecDrake };