import styled from "styled-components"
import { Link } from 'react-router-dom'

export const ListContainer = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 90vh;
`

export const Title = styled('h1')`
  font-weight: 900;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ListItem = styled('div')`
  margin-bottom: 1rem;
`

export const AddListButton = styled(Link)`
  background-color: palevioletred;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 900;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
`
