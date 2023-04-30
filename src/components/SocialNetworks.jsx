export const SocialNetworks =({cant,nombre,ruta,redireccion})=>{
    const netWorkingsCreator=()=>{
        const netWorkings =[]
        for (let i = 0; i < cant; i++) {
            netWorkings.push(
                <a key={i} href={redireccion[i]}>
                    <img src={ruta[i]} alt={nombre[i]} />
                </a>
            )
        }
        return netWorkings;
    }
    return(
        <div className="SocialNetworks">
            {netWorkingsCreator()}
        </div>
    )
}