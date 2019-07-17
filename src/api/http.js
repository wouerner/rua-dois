import axios from 'axios';

let instance = {};
instance = axios.create({
    // baseURL: 'https://06q4xp8rcd.execute-api.sa-east-1.amazonaws.com',
    baseURL: 'https://cors-anywhere.herokuapp.com/https://06q4xp8rcd.execute-api.sa-east-1.amazonaws.com',
    crossdomain: true,
    headers:{
        'Content-Type': 'application/json'
    }
});

export const getRequest = function (path) {
    return instance.get(path);
};

export const postRequest = (path, data) => instance.post(path, data);

export const putRequest = (path, bodyFormData) => {
    return instance.put(path, bodyFormData);
}

export const patchRequest = (path, bodyFormData) => {
    return instance.patch(path, bodyFormData);
}

export const deleteRequest = (path) => instance.delete(path);

export const HTTP = config => axios.create(config);
