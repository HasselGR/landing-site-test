import './stats-card.styles.scss'


export const StatsCard = (props) =>{
    return (
    <div className='stat-card-container'>
    <img className='stat-image' src="https://www.svgrepo.com/show/17364/download.svg" alt="" />
    <br/>
    <h1>{props.statistic} </h1>
    <hr/>
    <h2>{props.name} </h2>
    <br/>
    <h6>{props.text} </h6>
    </div>
)
}