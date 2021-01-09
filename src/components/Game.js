import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'
import SidePanel from './SidePanel'
import EndScreen from './EndScreen'
import {connect} from 'react-redux'
import {getQuestions, resetGame} from '../actions/actions'

class Game extends Component {
    constructor(props) {
        super(props)

        this.resetGame = this.resetGame.bind(this)
    }

    componentDidMount() {
        this.props.getQuestions()
    }

    async resetGame() {
        await this.props.resetGame()
        this.props.history.push('/')
    }

    render() {
        const {
            questions,
            isGameFinished
        } = this.props

        if (!questions.length) {
            return null
        }

        return isGameFinished
            ? (
                <EndScreen/>
            )
            : (
                <div className='l-game'>
                    <div className='c-questions'>
                        <Questions/>
                    </div>
                    <SidePanel/>
                </div>
            )
    }
}

Game.propTypes = {
    appSettings: PropTypes.object,
    history: PropTypes.object,
    resetGame: PropTypes.func
}

const mapStateToProps = state => ({
    appSettings: state.global,
    questions: state.game.questions,
    isGameFinished: state.global.isGameFinished
})

export default connect(mapStateToProps, {
    resetGame,
    getQuestions
})(Game)