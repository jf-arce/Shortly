export const StatisticsCard=(props)=>{
    return(
        <div className="statisticCard" style={props.style}>
            <div className="statistic__icon">
                <img src={props.img} alt="" />
            </div>
            <div className="statistic__text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}