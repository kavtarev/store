import React from "react"
import { connect } from "react-redux"
import { addToCart, removeFromCart, clearCart } from "../../Redux/cartReducer"
import CartItem from "./Cart.Item"
import style from "./Cart.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

import ButtonModalOrder from "../../Common/modal/modal"

const Cart = (props) => {
  let tempobj = {}
  for (let item of props.cart) {
    tempobj[item.id] = (tempobj[item.id] || 0) + 1
  }
  let tmpArray = []

  function itemCheck(item) {
    if (tmpArray.indexOf(item.id) === -1) {
      tmpArray.push(item.id)
      return true
    }
    return false
  }

  let total = props.cart.reduce((initial, current) => initial + current.id, 0)

  return props.cart.length === 0 ? (
    <h2 style={{ textAlign: "center" }}>Ваша корзина пуста</h2>
  ) : (
    <div className={style.main}>
      <h2>Ваша корзина:</h2>
      {props.cart
        .filter((item) => itemCheck(item))
        .sort((a, b) => a.id - b.id)
        .map((item, i) => (
          <CartItem
            key={i}
            id={item.id}
            number={tempobj[item.id]}
            name={item.name}
            email={item.email}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        ))}
      {props.cart && (
        <div className={style.costDiv}>
          <div className={style.costSpan}>
            {" "}
            Сумма: $<b>{total}</b>{" "}
          </div>
          <div className={style.costOrder}>
            <ButtonModalOrder clearCart={props.clearCart} total={total} />
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { cart: state.cart.cart }
}

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  clearCart,
})(Cart)
