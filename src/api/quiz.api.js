import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const loginRequest = (username, password) => api.post('/login', {
    username,
    password
})
export const registerRequest = (username, password, nick) => api.post('/register', {
    username,
    password,
    nick
})


export const fetchQuestions = () => api.get('/question')

export default api;
