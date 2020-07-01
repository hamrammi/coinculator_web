import React from 'react'
import { NavigationBar, NavigationLink } from './styles'

const Navigation = () => {
  return (
    <NavigationBar>
      <NavigationLink to="/list">List</NavigationLink>
      <NavigationLink to="/">Current</NavigationLink>
    </NavigationBar>
  )
}

export default Navigation
