import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Questions from './Questions'
import SidePanel from './SidePanel'
import EndScreen from './EndScreen'
import {connect} from 'react-redux'
import {getQuestions, resetGame} from '../actions/actions'

class Game extends Component {
    componentDidMount() {
        window.onbeforeunload = confirmExit;

        function confirmExit() {
            return "Are you sure?";
        }

        this.props.getQuestions()
    }

    componentWillUnmount() {
        this.props.resetGame()
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
    getQuestions,
    resetGame
})(Game)
