import React from 'react'
import classes from './Folder.module.css'
import { Link } from 'react-router-dom'

const Folder = ({ foldername, count }) => {
  return (
    <Link 
      className={classes.Folder}
      to={`/${encodeURI(foldername)}`}
    >
      <span>{foldername}</span>
      <div>
        <hr/>
        <span className={classes.Count}>{count}</span>
      </div>
    </Link>
  )
}

export default Folder