import { IDrake } from "../../../drakes.js";

class IceMDrake {
    constructor (name, race, element, habitat, location) {
        name = "Ice Mountain Drake";
        race = IDrake.namerace;
        element = IDrake.element;
        habitat = "Ices and snowies biomes, where places have constantly ice and snow";
        location = "Lives in the snowies mountain's peakes and in the forgotten and deep cold caves";
    }
}

export { IceMDrake };