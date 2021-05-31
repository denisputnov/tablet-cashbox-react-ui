import React from 'react'
import { Link } from 'react-router-dom'
import classes from './GoMainPageButton.module.css'

const GoMainPageButton = () => {
  return (
    <Link className={classes.GoMainPageButton} to='/' />
  )
}

export default GoMainPageButton