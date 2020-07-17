import React from 'react'
import { Scale, ScaleDash, ScaleInner } from './styles'

interface Props {
  dashes: number
}

const GoalMeter: React.FC<Props> = ({ dashes }) => {
  let range: number[] = []
  for (let i = 0; i < dashes; i++) {
    range = range.concat(i)
  }

  // let step = 360 / dashes
  let step = 240 / dashes

  return (
    <Scale>
      {range.map(x => {
        return (
          <ScaleInner key={x} dash={x} step={step}>
            <ScaleDash/>
          </ScaleInner>
        )
      })}
    </Scale>
  )
}

export default GoalMeter
