function UsedLetters(props) {

    return(
        <div>
            <ul>
                {props.guess.map((x) => (
                    <li key={x}>{x}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsedLetters