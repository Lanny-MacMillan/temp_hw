const Animal = (props) => {

    return(
        <div id='animal-div'>
            <h3 onClick = {(event) => {props.handleToggleComplete(event, props.animal)}}>Name: {props.animal.name}</h3>
            <h4>Species: {props.animal.species}</h4>
            <img id='animalImg' src={props.animal.image} alt={props.animal.name}></img>
            <h4>Resevered for Adoption: {props.animal.reservedForAdoption}</h4>

            <button onClick={(event) => {props.removeAnimal(props.animal)}}>Adopt</button>

            <h4>Edit Animal</h4>
            <form onSubmit={(event) => {props.editAnimal(event, props.animal)}}>
                <input placeholder={props.animal.name} onChange={props.handleNewName} type="text" required/><br/>
                <input placeholder={props.animal.species} onChange={props.handleNewSpecies} type="text" required/><br/>
                <input placeholder={props.animal.image} onChange={props.handleNewImage} type="text" required/><br/>
                <input id='button' type="submit" value="Edit Animal"/>
            </form>
            
        </div>
    )

} 
export default Animal
