import { IDrake } from "../../../drakes.js";

class SnowDrake {
    constructor (name, race, element, habitat, location) {
        name = "Snowy Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Snow biomes.";
        location = "Lives in plains arounded of Snow and very low temperatures.";
    }
}

export { SnowDrake };