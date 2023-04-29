const Shortio = async (longUrl) => {
    try {
      const response = await fetch('https://api.short.io/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY_HERE'
        },
        body: JSON.stringify({
          originalURL: longUrl
        })
      });
      const data = await response.json();
      return (
        <div>
            <p>{data.shortURL}</p>
        </div>
      )

    } catch (error) {
      console.error(error);
    }
}

export default Shortio;
