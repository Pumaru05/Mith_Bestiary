import { FSubRace } from "/fireSubraces/fireSubrace.js";
import { ISubRace } from "/iceSubraces/iceSubrace.js";
import { ESubRace } from "/electricSubraces/electricSubrace.js";
import { TSubRace } from "/terranSubraces/terranSubrace.js";
import { DaSubRace } from "/darkSubraces/darkSubrace.js";
// import { DragonWalker } from "";

class drake_subraces {
    constructor (idFDrakeSRace, idIDrakeSRace, idEDrakeSRace, idTDrakeSRace, idDaDrakeSRace, idDragonWalker) {
        idFDrakeSRace = FSubRace;
        idIDrakeSRace = ISubRace;
        idEDrakeSRace = ESubRace;
        idTDrakeSRace = TSubRace;
        idDaDrakeSRace = DaSubRace;
        // idDragonWalker = DragonWalker;
    }
}

export { drake_subraces };