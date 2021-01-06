import React from 'react'
import QuestionsList from './QuestionsList'
import PropTypes from 'prop-types'

class SidePanel extends React.Component {
  render () {
    const {
      currentQuestionNumber
    } = this.props

    return (
      <div className='c-side'>
        <QuestionsList
          currentQuestionNumber={currentQuestionNumber}
        />
      </div>
    )
  }
}

SidePanel.propTypes = {
  currentQuestionNumber: PropTypes.number,
}

export default SidePanel
