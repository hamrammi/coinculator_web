import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavigationBar = styled('div')`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
`

export const NavigationLink = styled(Link)`
  color: #61dafb;
`
