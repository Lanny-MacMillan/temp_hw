const Characters = (props) => {

    return(
        <div className='char-div' >
            <img src={props.character.image}/>
            <h4 id='red'>{props.character.name}</h4>
            <h4>Status: {props.character.status}</h4>
            <h4>Species: {props.character.species}</h4>
            <h4>Origin: {props.character.origin.name}</h4>
        </div>
    )


} 
export default Characters