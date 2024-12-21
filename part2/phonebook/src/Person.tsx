import persons from "./Persons.tsx";

const Person = ({person, onPersonDelete}) => {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (window.confirm(`Delete ${person.name}?`)) {
            onPersonDelete(person.id);
        }
    }

    return (
        <>
            <p key={person.id}>{person.name} {person.number}
                &nbsp;
                <button onClick={handleDelete}>Delete</button>
            </p>
        </>
    )
}

export default Person;