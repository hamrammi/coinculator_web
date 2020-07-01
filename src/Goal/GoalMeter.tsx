import React from 'react'
import { Scale, ScaleDash, ScaleInner } from './styles'

interface Props {
  dashes: number
}

function GoalMeter (props: Props) {
  let range: number[] = []
  for (let i = 0; i < props.dashes; i++) {
    range = range.concat(i)
  }

  // let step = 360 / props.dashes
  let step = 240 / props.dashes

  return (
    <Scale dashed={props.dashes}>
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
