import {
    RESET_GAME,
    SET_BAD_ANSWER,
    SET_CURRENT_QUESTION_ANSWERS,
    SET_GAME_STARTED,
    SET_GOOD_ANSWER,
    SET_QUESTIONS,
    SET_USER,
} from '../store/actionTypes'
import {fetchQuestions, loginRequest} from "../api/quiz.api";
import history from "../history";

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

export const login = (username, password) => async (dispatch) => {
    try {
        const {data} = await loginRequest(username, password);
        dispatch(setUserAction(data))
        history.push('/game')
    } catch (e) {
        console.error(e)
    }
}

export const setGameStarted = () => dispatch => {
    dispatch(setGameStartedAction())
}

export const resetGame = () => dispatch => {
    dispatch(resetGameAction())
}

export const getQuestions = () => async dispatch => {
    const {data} = await fetchQuestions()

    dispatch(setQuestionsAction(data))
}

export const setAnswer = goodAnswer => dispatch => {
    if (goodAnswer) {
        dispatch(setGoodAnswerAction())
    } else {
        dispatch(setBadAnswerAction())
    }
}

export const setCurrentQuestionAnswers = data => dispatch => {
    dispatch(setCurrentQuestionAnswersAction(data))
}