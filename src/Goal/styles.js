import styled from "styled-components";

export const Scale = styled('div')`
  display: flex;
  justify-content: center;
  color: yellow;
  flex-direction: column;
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
`

export const ScaleInner = styled('div')`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  left: calc(50vw - 150px);
  z-index: 7;
  transform: ${props => `rotate(${props.dash * props.step - 120 + (props.step / 2)}deg)`}
`

export const ScaleDash = styled('div')`
  position: absolute;
  content: '😉';
  top: 0;
  left: calc(50% - 2px);
  z-index: 10;
  width: 4px;
  height: 20px;
  background-color: white;
`


