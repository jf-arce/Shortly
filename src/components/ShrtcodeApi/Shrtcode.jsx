import { useState } from "react";
import shorten_url from "./shortenUrl";
import { ShortenInput } from "./ShortenInput";
import { ShortenOutput } from "./ShortenOutput";
import "./_Shrtcode.scss";

export const Shrtcode = () => {
  const [urlOriginal, setUrlOriginal] = useState("");
  const [urlsAcortadas, setUrlsAcortadas] = useState([]);
  const [warning, setWarning] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (urlOriginal === "") {
      setWarning("Please add a link")
    }else{
      setWarning("")
      shorten_url(urlOriginal,setUrlsAcortadas,urlsAcortadas);
    }
  };

  return (
    <section className="shorten__section">
      <div className="shorten__container">
        <ShortenInput 
          evento={handleSubmit} 
          urlOriginal={urlOriginal} 
          setUrlOriginal={setUrlOriginal}
          warning={warning}
        />
      </div>
      <ShortenOutput urlsAcortadas={urlsAcortadas}/>   
    </section>
  );
};



