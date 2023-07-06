import { ISubRace } from "../../subraces/iceSubraces/iceSubrace.js";

class IDrake {
    constructor (nameRace, element, habitat, location, subrace) {
        nameRace = "Ice Drake";
        element = "Ice";
        habitat = "Ice Biomes";
        location = "High and snowy mountains and/or deep and icy caves";
        subrace = ISubRace;
    }
}

export { IDrake };