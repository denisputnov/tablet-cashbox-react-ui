import React from 'react'
import Folder from '../Folder/Folder'
import { connect } from 'react-redux'

const MainPage = ({folders, recent}) => {
  return (
    <>
      {folders.map((folder) => (
        <Folder
          key={folder.name}
          foldername={folder.name}
          count={folder.count}
        />
      ))}
    </>
  )
}

function mapStateToProps(state) {
  return {
    folders: state.folders,
    recent: state.recent
  }
}

export default connect(mapStateToProps)(MainPage);