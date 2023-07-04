import { ThunDrake } from "ThunderDrake/ThunderDrake.js";
import { VoltDrake } from "VolticDrake/VolticDrake.js";
import { MgnDrake } from "MagneticDrake/MagneticDrake.js";
import { BoltDrake } from "BoltDrake/BoltDrake.js";

class ESubRace {
    constructor (idESubrace1, idESubrace2, idESubrace3, idESubrace4) {
        idESubrace1 = ThunDrake;
        idESubrace2 = VoltDrake;
        idESubrace3 = MgnDrake;
        idESubrace4 = BoltDrake;
    }
}

export { ESubRace }