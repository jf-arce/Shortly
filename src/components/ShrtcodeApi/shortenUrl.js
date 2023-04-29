const shorten_url = async(urlOriginal,setUrlsAcortadas,urlsAcortadas) => {
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${urlOriginal}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUrlsAcortadas([...urlsAcortadas, { original: urlOriginal, shortened: data.result.short_link }]); // Agrega la nueva URL acortada y la URL original a la matriz de URLs acortadas
    } catch (error) {
      console.log(error);
    }
}

export default shorten_url