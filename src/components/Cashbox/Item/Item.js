import React from 'react'
import classes from './Item.module.css'
import { connect } from 'react-redux'
import { ADD_ITEM_TO_CART } from '../../../redux/actions/actionTypes'
import { Link } from 'react-router-dom'

const Item = ({ name, img, price, addToCart }) => {

  return (
    <Link to="/" className={classes.Item} onClick={() => addToCart(name, img, price)}>
      <div className={classes.ItemContent}>
        <span className={classes.Name}>{name}</span>
        <span className={classes.Price}>{price}</span>
      </div>
      <img src={img} alt="PRODUCT_PHOTO" />
    </Link>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (name, img, price) => dispatch({type: ADD_ITEM_TO_CART, name, img, price}) 
  }
}

export default connect(null, mapDispatchToProps)(Item)