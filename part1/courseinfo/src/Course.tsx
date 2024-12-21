import Header from "./Header.tsx";
import Content from "./Content.tsx";
import Total from "./Total.tsx";

const Course = ({course}) => {
    return (
        <>
            <Header course={course}/>
            <Content parts={course.parts} />
            <Total course={course} />
        </>
    )
}

export default Course;