import { useState } from "react";

export const Shrtcode = () => {
  const [urlOriginal, setUrlOriginal] = useState("");
  const [urlsAcortadas, setUrlsAcortadas] = useState([]);
  const [copyMessageIndex, setCopyMessageIndex] = useState(-1);

  async function acortarURL() {
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${urlOriginal}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUrlsAcortadas([...urlsAcortadas, { original: urlOriginal, shortened: data.result.short_link }]); // Agrega la nueva URL acortada y la URL original a la matriz de URLs acortadas
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    acortarURL();
  };

  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(urlsAcortadas[index].shortened);
    setCopyMessageIndex(index);
  };
  

  return (
    <section className="shorten">
      <div className="shorten__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={urlOriginal}
            onChange={(e) => setUrlOriginal(e.target.value)}
            placeholder="Shorten link here"
          />        
          <button type="submit">Shorten It!</button>
        </form>

        {urlsAcortadas.map((urlsAcortada, index) => (
          <div key={index}>
            <p>URL largo: <a href={urlsAcortada.original}>{urlsAcortada.original}</a> </p>
            <div>
              <p>URL acortada: <a href={urlsAcortada.shortened}>{urlsAcortada.shortened}</a> </p>
              <button onClick={() => copyToClipboard(index)}> {copyMessageIndex === index ? "Copiado!" : "Copiar URL" }</button>
            </div>
          </div>
        ))}        
        
      </div>
    </section>
  );
};
