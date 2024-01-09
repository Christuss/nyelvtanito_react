import './MondatValaszto.css'

export default function MondatValaszto(props) {
  const MONDAT = props.mondat;
  const ketteVagott = MONDAT.mondat.split("_");


  return (
    <div className="MondatValaszto">
      <p>{MONDAT.magyar}</p>
      <span>{ketteVagott[0]}</span>
      <select className="form-select">
        {MONDAT.valasztas.map((val, key) => {
            return(
            <option key = {key}>{val}</option>
            )
        })}
       
      </select>
      <span>{ketteVagott[1]}</span>
      <button className="btn btn-primary" onClick={props.valChange()}>Következő</button>
    </div>
  );
}
