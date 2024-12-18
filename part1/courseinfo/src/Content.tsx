import Part from "./Part.tsx";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part, index) => {
                return (
                    <Part name={part.name} exercises={part.exercises} key={index}/>
                )
            })}
        </>
    )
}

export default Content;