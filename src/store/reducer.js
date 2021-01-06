import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
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
} from './actionTypes'

const mainDefaultState = {
    gameStarted: false,
    login: '',
    nick: '',
    difficulty: '',
    hasWon: false,
    isGameFinished: false
}

const gameReducerDefaultState = {
    questions: [],
    currentQuestion: {},
    answers: [],
    currentQuestionNumber: 0,
    answer: {},
    callFriendUsed: false,
    spectatorsUsed: false,
    halfOnHalfUsed: false
}

const mainReducer = (state = mainDefaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_GAME_STARTED:
            return {
                ...state,
                gameStarted: true
            }
        case SET_USER:
            return {
                ...state,
                user: {
                    nick: payload.nick,
                    login: payload.login
                }
            }
        case SET_BAD_ANSWER:
            return {
                ...state,
                isGameFinished: true
            }
        case RESET_GAME:
            return mainDefaultState
        default:
            return state
    }
}

const gameReducer = (state = gameReducerDefaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_QUESTIONS: {
            return {
                ...state,
                questions: payload,
                currentQuestion: payload[state.currentQuestionNumber]
            }
        }
        case SET_GOOD_ANSWER:
            return {
                ...state,
                currentQuestionNumber: ++state.currentQuestionNumber,
                currentQuestion: state.questions[state.currentQuestionNumber++]
            }
        case USE_SPECTATORS_LINE:
            return {
                ...state,
                spectatorsUsed: true
            }
        case USE_CALL_FRIEND_LINE:
            return {
                ...state,
                callFriendUsed: true
            }
        case USE_HALF_ON_HALF_LINE:
            return {
                ...state,
                halfOnHalfUsed: true
            }
        case SET_CURRENT_QUESTION_ANSWERS:
            return {
                ...state,
                currentQuestion: {
                    ...state.currentQuestion,
                    answers: payload
                }
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    global: mainReducer,
    game: gameReducer
})

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export {
    store
}


