import { IDrake } from "../../../drakes.js";

class GlacDrake {
    constructor (name, race, element, habitat, location) {
        name = "Glaciar Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Artic biomes and biomes with much glaciars.";
        location = "Lives in artic seas, on the cold glaciars.";
    }
}

export { GlacDrake };