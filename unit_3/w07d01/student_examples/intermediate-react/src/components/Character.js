const Character = (props) => {
    return (
    <div>
    <hr/>
        <p>{props.character.name}</p>
        <img src={props.character.imageUrl}/>
    </div>
    )   
}

export default Character

