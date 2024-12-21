import Part from "./Part.tsx";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => {
                return (
                    <Part key={part.id} name={part.name} exercises={part.exercises} />
                )
            })}
        </>
    )
}

export default Content;