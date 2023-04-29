import Button from "./Button";

const Header = () =>{

    return(
        <header className="header">
            <div className="header__container">
                <nav className="header__nav">
                    <div className="header__iconContainer">
                        <a href="">Shortly</a>
                    </div>
                    <ul className="nav__list">
                        <li className="list__item"><a className="underline" href="">Feature</a></li>
                        <li className="list__item"><a className="underline" href="">Pricing</a></li>
                        <li className="list__item"><a className="underline" href="">Resources</a></li>
                    </ul>
                </nav>
                
                <nav className="header__nav--login">
                    <ul className="nav__list--login">
                        <li className="list__item"><a className="underline" href="">Login</a></li>
                        <Button texto="Sing Up"/>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Header;