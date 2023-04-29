const Button = props =>{
    return(
        <button className="btn" style={props.style} type={props.type} onClick={props.click}>{props.texto}</button>
    )
}

export default Button;