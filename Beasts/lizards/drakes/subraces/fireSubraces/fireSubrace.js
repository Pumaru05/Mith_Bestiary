import { DesDrake } from "DesertDrake/DesertDrake.js";
import { VolDrake } from "VolcanicDrake/VolcanicDrake.js";
import { LavaDrake } from "LavaDrake/LavaDrake.js";
import { SolDrake } from "SolDrake/SolDrake.js";

class FSubRace {
    constructor (idFSubrace1, idFSubrace2, idFSubrace3, idFSubrace4) {
        idFSubrace1 = DesDrake;
        idFSubrace2 = VolDrake;
        idFSubrace3 = LavaDrake;
        idFSubrace4 = SolDrake;
    }
}

export { FSubRace }