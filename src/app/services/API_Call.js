import { API_KEY } from "../../../key_api";
const URL = "https://api.api-ninjas.com/v1/exercises";

const NAME_URL = "https://api.api-ninjas.com/v1/exercises?name=";
export const listExercises= () => {
    return fetch(URL, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    }).then(response => response.json())
        .then((data) => {
            return data;
        })
        .catch(error => console.error('Erro:', error));
};

export const getExercise = (name) => {
    return fetch(NAME_URL + name, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    }).then(response => response.json())
        .then((data) => {
            return data;
        })
        .catch(error => console.error('Erro:', error));
};