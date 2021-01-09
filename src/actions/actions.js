import {
    RESET_GAME,
    SET_BAD_ANSWER,
    SET_CURRENT_QUESTION_ANSWERS,
    SET_CURRENT_QUESTION_NUMBER,
    SET_GAME_FINISHED,
    SET_GAME_STARTED,
    SET_GOOD_ANSWER,
    SET_QUESTIONS,
    SET_STATS,
    SET_USER,
} from '../store/actionTypes'
import {fetchQuestions, getStatsRequest, loginRequest, registerRequest, saveAttemptRequest} from "../api/quiz.api";
import history from "../history";
import {questionsList} from "../helpers";

const setUserAction = data => ({
    type: SET_USER,
    payload: data
})

const setGameStartedAction = () => ({
    type: SET_GAME_STARTED
})

const resetGameAction = () => ({
    type: RESET_GAME
})

const setQuestionsAction = data => ({
    type: SET_QUESTIONS,
    payload: data
})

const setGoodAnswerAction = data => ({
    type: SET_GOOD_ANSWER,
    payload: data
})

const setBadAnswerAction = data => ({
    type: SET_BAD_ANSWER,
    payload: data
})

const setCurrentQuestionAnswersAction = data => ({
    type: SET_CURRENT_QUESTION_ANSWERS,
    payload: data
})
const setStatsAction = data => ({
    type: SET_STATS,
    payload: data
})
const setCurrentQuestionNumber = data => ({
    type: SET_CURRENT_QUESTION_NUMBER,
    payload: data
})
const setGameFinished = data => ({
    type: SET_GAME_FINISHED,
    payload: data
})

export const login = (username, password, setErrors) => async (dispatch) => {
    try {
        const {data} = await loginRequest(username, password);
        if (!data) setErrors(true)
        dispatch(setUserAction(data))
        history.push('/dashboard')
    } catch (e) {
        console.error(e)
        setErrors(true)
    }
}

export const register = (username, password, nick, setErrors) => async (dispatch) => {
    try {
        const {data} = await registerRequest(username, password, nick);
        if (!data) setErrors(true)
        dispatch(setUserAction(data))
        history.push('/dashboard')
    } catch (e) {
        console.error(e)
        setErrors(true)
    }
}
export const fetchStats = () => async (dispatch, getState) => {
    const {user} = getState().global;
    const {data} = await getStatsRequest(user.username);
    dispatch(setStatsAction(data))
}

export const saveAttempt = (prize) => async (dispatch, getState) => {
    const {user} = getState().global;
    saveAttemptRequest(user.username, prize);
}

export const setGameStarted = () => dispatch => {
    dispatch(setGameStartedAction())
}

export const resetGame = () => dispatch => {
    dispatch(resetGameAction())
    dispatch(setCurrentQuestionNumber(0))
    history.push('/dashboard')
}

export const getQuestions = () => async dispatch => {
    const {data} = await fetchQuestions()

    dispatch(setQuestionsAction(data))
}

export const setAnswer = goodAnswer => (dispatch, getState) => {
    if (goodAnswer) {
        const {currentQuestionNumber} = getState().game
        if (currentQuestionNumber === questionsList.length - 1) {
            dispatch(setGameFinished(true))
        }
        dispatch(setGoodAnswerAction())
    } else {
        dispatch(setBadAnswerAction())
    }
}

export const setCurrentQuestionAnswers = data => dispatch => {
    dispatch(setCurrentQuestionAnswersAction(data))
}
