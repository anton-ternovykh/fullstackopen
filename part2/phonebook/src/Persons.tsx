import Person from "./Person.tsx";

const Persons = ({filterPersons, onPersonDelete}) => {
    return filterPersons.map(person => <Person key={person.id} person={person} onPersonDelete={onPersonDelete} />);
}

export default Persons;