import MondatokModel from "../model/MondatokModel";
import { useState } from "react";
import MondatValaszto from "../view/MondatValaszto";

export default function Valaszto() {
    const MONDATOKMODEL = new MondatokModel();
    let index = 2;
    const [mondat, setMondat] = useState({magyar: "",
    mondat: "",
    alap: "",
    valasztas: [""]});

    function valChange () {
      index++;
      setMondat(MONDATOKMODEL.mondatOsszeallit(index));
    }
    
    return (
      <div className="Valaszto">
        <p>{MONDATOKMODEL.cim}</p>
        <MondatValaszto mondat = {mondat} valChange = {valChange}/>
      </div>
    );
  }
  
  