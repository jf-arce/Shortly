export const FooterNavSections =(props)=>{
    const linksCreator =()=>{
        const links = [];
        for (let i = 0; i < props.cant; i++) {
            links.push(
                <li key={i}>
                    <a href="#">{props.linkText[i]}</a>
                </li>
            )
        }
        return links;
    }
    return(
        <div className="nav__section">
            <h3>{props.title}</h3>
            <ul className="nav__section__list">
                {linksCreator()}  
            </ul>
        </div>
    )
}