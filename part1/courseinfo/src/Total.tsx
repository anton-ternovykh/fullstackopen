const Total = (props) => {

    const total = props.parts.reduce((acc, part) => {
        acc+= part.exercises;
        return acc;
    }, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;