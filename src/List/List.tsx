import React from 'react'
import { AddListButton, ListContainer, ListItem, Title } from './styles'

const List = () => {
  return (
    <ListContainer>
      <Title>List</Title>
      <ListItem>List #1</ListItem>
      <ListItem>List #2</ListItem>
      <AddListButton to="/add-list">Add list</AddListButton>
    </ListContainer>
  )
}

export default List
