import React, { useState, useRef, useEffect } from 'react'
import classes from './CartItem.module.css'

const CartItem = ({name, count, price, onDelete, onInc, onDec}) => {
  const [showConrollsPanel, setShowConrollsPanel] = useState(false);

  const cartItem = useRef(null)

  const openConrollsPanel = () => {
    setShowConrollsPanel(true)
  }

  const closeControllsPanel = () => {
    setShowConrollsPanel(false)
  }

  const incrementItem = () => {
    onInc(name)
    closeControllsPanel()
  }

  const decrementItem = () => {
    onDec(name)
    closeControllsPanel()
  }

  const deleteItem = () => {
    onDelete(name)
    closeControllsPanel()
  };


  useEffect(() => {
    const current = cartItem.current
    
    const onBlur = (e) => {
      setTimeout(() => {
        setShowConrollsPanel(false);
      }, 100);
    }

    current.addEventListener('blur', onBlur)
    return () => {
      current.removeEventListener('blur', onBlur)
    }
  }, [])

  return (
    <div className={classes.CartItem} >
      { showConrollsPanel && 
      <div className={classes.ItemControls}>
        <button className={classes.Delete} onClick={deleteItem} />
        <button className={classes.Decrement} onClick={decrementItem} /> 
        <button className={classes.Increment} onClick={incrementItem} />
        <button className={classes.Close} onClick={closeControllsPanel}>Закрыть</button>
      </div> }
      <div ref={cartItem} tabIndex="0" className={classes.ItemInfo} onClick={openConrollsPanel}>
        <div>
          <span className={classes.ItemName}>{name}</span>
          <span className={classes.ItemPrice}>{price} руб.</span>
        </div>
        <div>
          <span className={classes.Sum}>{(price * count).toFixed(2)} руб.</span>
          <span className={classes.Count}>{count} шт.</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem