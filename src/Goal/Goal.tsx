import React from 'react'
import GoalMeter from './GoalMeter'
import { GoalContainer } from './styles'

const Goal: React.FC = () => {
  return (
    <GoalContainer>
      <GoalMeter dashes={20}/>
      <div>This is main component</div>
    </GoalContainer>
  )
}

export default Goal
