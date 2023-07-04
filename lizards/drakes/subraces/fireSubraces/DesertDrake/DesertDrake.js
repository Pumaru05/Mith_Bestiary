import { FDrake } from "../../../drakes.js";

class DesDrake {
    constructor (Name, race, element, habitat, location) {
        Name = "Desert Drake";
        race = FDrake.nameRace;
        element = FDrake.element;
        habitat = "Desert biomes, dry and hot temperatures";
        location = "Habitats lacking water and moisture sources"
    }
}

export { DesDrake };