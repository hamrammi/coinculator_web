import styled from "styled-components";

export const GoalContainer = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const Scale = styled('div')`
  display: flex;
  justify-content: center;
  color: yellow;
  flex-direction: column;
  width: 70vw;
  height: 70vw;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
`

export const ScaleInner = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: ${props => `rotate(${props.dash * props.step - 120 + (props.step / 2)}deg)`};
  max-width: 100%;
`

export const ScaleDash = styled('div')`
  position: absolute;
  content: '😉';
  top: 0;
  left: calc(50% - 2px);
  width: 4px;
  height: 20px;
  background-color: white;
`


