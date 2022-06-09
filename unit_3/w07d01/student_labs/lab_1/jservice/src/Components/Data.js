const Data = (props) => {

    return(
        <>
            <div>
                <h3>Points: {props.value}</h3>
                <h3>Points: {props.category}</h3>
                <h3>Points: {props.answer}</h3>
                <button>Click to Reveal Answer</button>
                {props.revealAnswer ? <h2>Answer: {props.answer}</h2> : null}
            </div>
        </>
    )


} 
export default Data