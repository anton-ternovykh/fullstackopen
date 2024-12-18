const Anecdote = ({title, anecdote, votes}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    );
}

export default Anecdote;