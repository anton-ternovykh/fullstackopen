const Total = ({course}) => {

    const total = course.parts.reduce((acc, part) => {
        acc+= part.exercises;
        return acc;
    }, 0)
    return (
        <p><strong>Total of exercises {total}</strong></p>
    )
}

export default Total;