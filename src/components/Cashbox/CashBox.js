import React from "react";
import classes from "./CashBox.module.css";
import CartItem from "./CartItem/CartItem";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import MainPage from "./MainPage/MainPage";
import InFolderPage from "./InFolderPage/InFolderPage";
import EmptyCart from './EmptyCart/EmptyCart'

import { DELETE_ITEM_FROM_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from '../../redux/actions/actionTypes'

const CashBox = ({cart, deleteItemFromCart, incrementCartItem, decrementCartItem}) => {
  return (
    <main className={classes.CashBox}>
      <section className={classes.CashBoxContent}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/:foldername" component={InFolderPage} />
          </Switch>
        </BrowserRouter>
      </section>
      <aside className={classes.CartSum}>
        {cart.length ? cart.map(
          item => 
            <CartItem  
              key={item.name} 
              count={item.count} 
              name={item.name} 
              price={item.price}
              onDelete={deleteItemFromCart}
              onInc={incrementCartItem}
              onDec={decrementCartItem}
            />
        ) : <EmptyCart />}
        <button className={classes.MakeOrder} disabled={!cart.length}>
          {cart.length 
          ? `Оформить: ${(cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2))} руб.`
          : "Добавьте товар"}
        </button>
      </aside>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
    folders: state.folders,
    recent: state.recent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItemFromCart: name => dispatch({type: DELETE_ITEM_FROM_CART, payload: name}),
    incrementCartItem: name => dispatch({type: INCREMENT_CART_ITEM, payload: name}),
    decrementCartItem: name => dispatch({type: DECREMENT_CART_ITEM, payload: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CashBox);
