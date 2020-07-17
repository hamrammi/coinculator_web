import styled, { keyframes } from 'styled-components'

export const App = styled('div').attrs(() => ({
}))`
  background-color: #28304a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: #ddd;
`

const appSpin = keyframes`
  @keyframes App-logo-spin
    from
      transform: rotate(0deg)
  
    to
      transform: rotate(360deg)
`

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${appSpin} infinite 20s linear;
  }
`
