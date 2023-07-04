import { FDrake } from "../../../drakes.js";

class SolDrake {
    constructor (name, race, element, habitat, location) {
        name = "Solar Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Sunny biomes, especially, where places have the sun constantly emitting light";
        location = "Lives in zones where the sky is clear and the zones are rich in foods and culture";
    }
}

export { SolDrake };