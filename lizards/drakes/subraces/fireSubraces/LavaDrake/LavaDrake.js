import { FDrake } from "../../../drakes.js";

class LavaDrake {
    constructor (name, race, element, habitat, location) {
        name = "Lava Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Volcanic biomes, but, the volcano must be activated";
        location = "Lives inside the volcanos, eating lava and magma";
    }
}

export { LavaDrake };