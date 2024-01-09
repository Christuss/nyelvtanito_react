import { szenvedoMondatok } from "./angol";


class MondatokModel {
    #angol = [];
    #aktObj = {};
    constructor() {
        this.#angol = szenvedoMondatok;

        
    }
    mondatOsszeallit(i) {
        let obj = this.#angol[i];
        this.#aktObj = {
            magyar:obj.magyar,
            mondat:obj.mondat,
            alap:obj.alap,
            valasztas: obj.valasztas,
            helyes: obj.valasztas[0]
        }

        return this.#aktObj;
    }

    get cim() {
        return this.#angol[0];
    }
    get sugoSzoveg() {
        return this.#angol[1];
    }

    get hossz() {
        return this.#angol.length -2;
    }
}

export default MondatokModel;