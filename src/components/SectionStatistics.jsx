import { StatisticsCard } from "./StatisticsCard"
export const SectionStatistics = () =>{
    return(
        <section className="sectionStatistics">
            <div className="sectionStatistics__container">
                <div className="sectionStatistics__text-container">
                    <h2 className="text__title">
                        Advanced Statistcs
                    </h2>
                    <p className="text__subtitle">
                        Track how your links are performing across the web with
                        our advanced statistcs dashboard.
                    </p>
                </div>
                <div className="sectionStatistics__statistics">
                    <div className="bind"></div>
                    <StatisticsCard
                        img="/assets/images/icon-brand-recognition.svg"
                        title="Unique Visitors"
                        text="Boost you brand recognition width catch click.
                        Generic links don't mean a thing. Branded links help
                        instil confidence in your content"
                    />
                    <StatisticsCard
                        img="/assets/images/icon-detailed-records.svg"
                        title="Detailed Records"
                        text="Boost you brand recognition width catch click.
                        Generic links don't mean a thing. Branded links help
                        instil confidence in your content"
                        style={{marginTop:"100px"}}
                    />
                    <StatisticsCard
                        img="/assets/images/icon-fully-customizable.svg"
                        title="Fully Customizable"
                        text="Boost you brand recognition width catch click.
                        Generic links don't mean a thing. Branded links help
                        instil confidence in your content"
                        style={{marginTop:"200px"}}
                    />
                </div>
            </div>
        </section>
    )
}

