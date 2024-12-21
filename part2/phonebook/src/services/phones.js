import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(`${baseUrl}`)
        .then(response => response.data);
}

const add = ({id, name, number}) => {
    return axios.post(`${baseUrl}/`, {
        name: name,
        number: number,
    }).then(response => response.data);
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, person) => {
    return axios.put(`${baseUrl}/${id}`, person)
        .then(response => response.data);
}

export default {
    getAll: getAll,
    add: add,
    remove: remove,
    update: update,
}