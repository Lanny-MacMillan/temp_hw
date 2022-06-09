const Locations = (props) => {

    return(
        <div className='loc-div'>
            <h3 id='red'>{props.location.name}</h3>
            <h4>Status: {props.location.type}</h4>
            <h4>Location: {props.location.dimension}</h4>
        </div>
    )


} 
export default Locations