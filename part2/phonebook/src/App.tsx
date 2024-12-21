import {useState, useEffect} from 'react'
import phonesService from './services/phones.js'
import dialogService from './services/dialog.js';
import Filter from "./Filter.tsx";
import PersonForm from "./PersonForm.tsx";
import Persons from "./Persons.tsx";
import Error from "./Error.tsx";
import Success from "./Success.tsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [filter, setFilter] = useState('')

    useEffect(() => {
        phonesService.getAll()
            .then(data => {
                setPersons(data);
            })
            .catch(error => {
                setErrorMessage('There is a problem with data load.');
                setTimeout(() => setErrorMessage(''), 5000);
            });
    }, []);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    }

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPhone(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const person = {
            id: undefined,
            name: newName,
            number: newPhone,
        }

        const existedPerson = persons.find(person => person.name === newName);

        if (existedPerson) {
            if (!dialogService.confirm(`${existedPerson.name} is already added to phonebook, replace the old number a new one?`)) {
                return;
            }
            person.id = existedPerson.id;
            phonesService.update(person.id, person)
                .then(data => {
                    const newPersons = [...persons].map(person => {
                        if (person.id === existedPerson.id) {
                            return data;
                        }
                        return person;
                    })
                    setPersons(newPersons);
                    setSuccessMessage('Phone number updated successfully.');
                    setTimeout(() => setSuccessMessage(''), 5000);
                })
                .catch(error => {
                    setErrorMessage('There is a problem with updating record.');
                    setTimeout(() => setErrorMessage(''), 5000);
                });
        } else {
            phonesService.add({
                name: newName,
                number: newPhone,
            }).then(data => {
                setPersons(persons.concat(data));
                setSuccessMessage('Phone number added successfully.');
                setTimeout(() => setSuccessMessage(''), 5000);
            }).catch(error => {
                setErrorMessage('There is a problem with adding record.');
                setTimeout(() => setErrorMessage(''), 5000);
            });
        }
        setNewName('');
        setNewPhone('');
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    }

    const filterPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    const onPersonDelete = (id) => {
        phonesService.remove(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id));
                setSuccessMessage('Phone number deleted successfully.');
                setTimeout(() => setSuccessMessage(''), 5000);
            }).catch(error => {
            const person = persons.find(person => person.id === id);
            const message = error.status === 404
                ? `Information about ${person.name} has already been remove from server`
                : 'There is a problem with deleting record.';

            setErrorMessage(message);
            setTimeout(() => setErrorMessage(''), 5000);
        });
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Error message={errorMessage}/>
            <Success message={successMessage}/>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <h3>Add a new</h3>
            <PersonForm newName={newName}
                        handleNameChange={handleNameChange}
                        newPhone={newPhone}
                        handlePhoneChange={handlePhoneChange}
                        handleSubmit={handleSubmit}/>
            <h3>Numbers</h3>
            <Persons filterPersons={filterPersons} onPersonDelete={onPersonDelete}/>
        </div>
    )
}

export default App