import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
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
    SET_USER
} from './actionTypes'

const mainDefaultState = {
    gameStarted: false,
    user: {},
    hasWon: false,
    isGameFinished: false,
    stats: [],
}

const gameReducerDefaultState = {
    questions: [],
    currentQuestion: {},
    answers: [],
    currentQuestionNumber: 0,
    answer: {},
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
                    username: payload.username
                }
            }
        case SET_BAD_ANSWER:
            return {
                ...state,
                isGameFinished: true
            }
        case SET_STATS:
            return {
                ...state,
                stats: payload
            }
        case SET_GAME_FINISHED:
            return {
                ...state,
                isGameFinished: action.payload
            }

        case RESET_GAME:
            return {
                ...state,
                hasWon: false,
                gameStarted: false,
                isGameFinished: false,
            }
        default:
            return state
    }
}

const gameReducer = (state = gameReducerDefaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_QUESTIONS: {
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
        case SET_CURRENT_QUESTION_ANSWERS:
            return {
                ...state,
                currentQuestion: {
                    ...state.currentQuestion,
                    answers: payload
                }
            }
        case SET_CURRENT_QUESTION_NUMBER:
            return {
                ...state,
                currentQuestionNumber: 0
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


