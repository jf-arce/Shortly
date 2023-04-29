import Button from "./Button"

const Hero = () => {
    const btnStyle = {
        marginTop: "20px",
        padding: "16px 40px",
        fontSize: "1.1em"
    }
    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__text">
                    <h1 className="text__title">More than just shorter links</h1>
                    <p className="text__subtitle">
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </p>
                    <Button texto="Get Started" style={btnStyle}/>
                </div>
                
                <div className="hero__img">
                    <img src="assets/images/illustration-working.svg" alt="Persona sentada en el escritorio"></img>
                </div>
            </div>
        </section>
    )
}

export default Hero