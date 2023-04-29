import Button from "../Button"
import "./_ShortenInput.scss";

export const ShortenInput=({evento,urlOriginal,setUrlOriginal,warning})=>{
 
  return(
      <form className="shorten__form" onSubmit={evento}>
        <div className="shorten__form-container">
          <input
            className={`shorten__input ${warning ? "warning" : ""}`}
            type="text"
            value={urlOriginal}
            onChange={(e) => setUrlOriginal(e.target.value)}
            placeholder="Shorten link here"
          /> 
          <Button texto="Shorten It!" type="submit" style={{borderRadius:"5px",padding:"20px",warning}}/>
        </div>
        {warning && <p className="warning-message">{warning}</p>}   
      </form>
  )
}