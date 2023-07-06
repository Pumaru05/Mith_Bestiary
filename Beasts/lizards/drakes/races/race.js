import { FDrake } from "fire/fireDrake.js";
import { IDrake } from "ice/iceDrake.js";
import { EDrake } from "electric/electricDrake.js";
import { TDrake } from "terran/terranDrake.js";
import { DaDrake } from "dark/darkDrake.js";

class race {
    constructor (idfDrake, idiDrake, ideDrake, idtDrake, iddaDrake) {
        idfDrake = FDrake;
        idiDrake = IDrake;
        ideDrake = EDrake;
        idtDrake = TDrake;
        iddaDrake = DaDrake;
    }
}

export { race };