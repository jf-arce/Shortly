import { useState } from "react";
import "./_ShortenOutput.scss";
import Button from "../Button";

export const ShortenOutput = ({urlsAcortadas}) =>{

    const [copyMessageIndex, setCopyMessageIndex] = useState(-1);

    const copyToClipboard = (index) => {
        navigator.clipboard.writeText(urlsAcortadas[index].shortened);
        setCopyMessageIndex(index);
    };

    return(
        urlsAcortadas.map((urlsAcortada, index) => (
            <div key={index} className="short-url-container">
                <p href={urlsAcortada.original}>{urlsAcortada.original} </p>
                <div className="short-url-copy">
                    <p href={urlsAcortada.shortened}>{urlsAcortada.shortened}</p>
                    <Button 
                        click={() => copyToClipboard(index)} 
                        texto={copyMessageIndex === index ? "Copiado!" : "Copiar URL" } 
                        style={{
                            borderRadius:"5px",
                            width:"130px",
                        }}
                    />
                </div>
            </div>
        ))   
    )
}
