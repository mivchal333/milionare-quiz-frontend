import {
    GET_QUESTIONS,
    RESET_GAME,
    SET_BAD_ANSWER,
    SET_CURRENT_QUESTION_ANSWERS,
    SET_GAME_STARTED,
    SET_GOOD_ANSWER,
    SET_USER,
    USE_CALL_FRIEND_LINE,
    USE_HALF_ON_HALF_LINE,
    USE_SPECTATORS_LINE
} from '../store/actionTypes'
import {fetchQuestions} from '../helpers'
import {shuffle} from 'lodash'
import {loginRequest} from "../api/quiz.api";
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

const getQuestionsAction = data => ({
    type: GET_QUESTIONS,
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

const useSpectatorsLineAction = () => ({
    type: USE_SPECTATORS_LINE
})

const useHalfOnHalfLineAction = () => ({
    type: USE_HALF_ON_HALF_LINE
})

const useCallFriendLineAction = () => ({
    type: USE_CALL_FRIEND_LINE
})

const setCurrentQuestionAnswersAction = data => ({
    type: SET_CURRENT_QUESTION_ANSWERS,
    payload: data
})

export const login = (username, password) => async (dispatch, getState) => {
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

export const getQuestions = difficulty => async dispatch => {
    const response = await fetchQuestions(difficulty)

    const questions = response.map(item => {
        const {
            incorrectAnswers,
            ...rest
        } = item

        return {
            ...rest,
            answers: shuffle([rest.correctAnswer, ...incorrectAnswers])
        }
    })

    dispatch(getQuestionsAction(questions))
}

export const setAnswer = goodAnswer => dispatch => {
    if (goodAnswer) {
        dispatch(setGoodAnswerAction())
    } else {
        dispatch(setBadAnswerAction())
    }
}

export const useSpectatorsLine = () => dispatch => {
    dispatch(useSpectatorsLineAction())
}

export const useHalfOnHalfLine = () => dispatch => {
    dispatch(useHalfOnHalfLineAction())
}

export const useCallFriendLine = () => dispatch => {
    dispatch(useCallFriendLineAction())
}

export const setCurrentQuestionAnswers = data => dispatch => {
    dispatch(setCurrentQuestionAnswersAction(data))
}
