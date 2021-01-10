import axios from "axios";

const api = axios.create({
    baseURL: 'https://millionaire-backend.herokuapp.com/'
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
export const getStatsRequest = (username) => api.get('/stats', {
    params:
        {
            username
        }
})
export const saveAttemptRequest = (username, prize) => api.post('/stats', {
    username,
    prize,
})
export const postQuestion = (question, correctAnswer, incorrectAnswers) => api.post('/question', {
    question, correctAnswer, incorrectAnswers
})


export const fetchQuestions = () => api.get('/question')

export default api;
