import { IceMDrake } from "IceMountainDrake/IceMountainDrake.js";
import { GlacDrake } from "GlaciarDrake/GlaciarDrake.js";
import { SnowDrake } from "SnowyDrake/SnowyDrake.js";
import { SpecDrake } from "SpectralDrake/SpectralDrake.js";

class ISubRace {
    constructor (idISubrace1, idISubrace2, idISubrace3, idISubrace4) {
        idISubrace1 = IceMDrake;
        idISubrace2 = GlacDrake;
        idISubrace3 = SnowDrake;
        idISubrace4 = SpecDrake;
    }
}

export { ISubRace }