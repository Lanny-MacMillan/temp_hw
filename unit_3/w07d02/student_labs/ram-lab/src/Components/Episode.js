const Episodes = (props) => {

    return(
        <div className='episode-div' >
            <h4 id='red'>{props.episodes.name}</h4>
            <h4>Air Date: {props.episodes.air_date}</h4>
            <h4>Episode: {props.episodes.episode}</h4>
        </div>
    )


} 
export default Episodes