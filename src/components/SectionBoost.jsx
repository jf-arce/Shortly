import Button from "./Button"

export const SectionBoost =()=>{
    const style ={
        padding: "12px 35px"
    }
    return(
        <section className="boost">
            <h2>Boost your links today</h2>
            <Button texto="Get Started" style={style}/>
        </section>
    )
}