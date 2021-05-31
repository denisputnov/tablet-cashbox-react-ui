import React from 'react'
import Item from '../Item/Item'
import { connect } from 'react-redux'
import GoMainPageButton from './GoMainPageButton/GoMainPageButton'

const InFolderPage = ({ db , match}) => {
  return (
    <>
      <GoMainPageButton />
      {db[decodeURI(match.params.foldername)].map((item) => (
        <Item
          key={item.name}
          name={item.name}
          img={item.img}
          price={item.price}
        />
      ))}
    </>
  )
}

function mapStateToProps(state) {
  return {
    db: state.db
  }
}

export default connect(mapStateToProps)(InFolderPage);