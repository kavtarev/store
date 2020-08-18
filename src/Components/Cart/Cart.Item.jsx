import React from "react"
import style from "./Cart.module.css"
import card from "../../assets/cardimg.jpg"
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "react-bootstrap/Button"

const CartItem = ({ id, name, email, number, addToCart, removeFromCart }) => {
  return (
    <div className={style.cartItem}>
      <div className={style.data}>
        <img style={{ width: "20px", height: "20px" }} src={card} alt='card' />
        <div>
          <b>
            {name} {email}
          </b>
          {"  "} x <b>{number}</b>
          {"   "}
        </div>

        <div>
          {" "}
          Цена за 1 шт: <b>${id}</b>{" "}
        </div>
        <div>
          <u>
            Общая стоимость: <b>{id * number}</b>
          </u>
        </div>
      </div>
      <div className={style.buttons}>
        <Button
          style={{ margin: "0.5rem" }}
          variant='success'
          onClick={() => addToCart({ id, name, email })}
        >
          Добавить
        </Button>
        <Button
          style={{ margin: "0.5rem" }}
          variant='danger'
          onClick={() => removeFromCart(id)}
        >
          Убрать
        </Button>
      </div>
    </div>
  )
}

export default CartItem
