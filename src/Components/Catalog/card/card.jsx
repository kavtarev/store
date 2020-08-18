import React, { useState } from "react"
import card from "../../../assets/cardimg.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux"
import { addToCart, removeFromCart } from "../../../Redux/cartReducer"
import style from "./card.module.css"
import MyVerticallyCenteredModal from "../../../Common/modal/CenteredModal"

const CardComponent = ({
  id,
  email,
  name,
  addToCart,
  cart,
  removeFromCart,
}) => {
  let list = cart.map((item) => item.id)
  let sum = list.reduce((sum, item) => sum + (item === id ? 1 : 0), 0)

  const [modalShow, setModalShow] = useState(false)

  return (
    <div className={style.main}>
      <Card>
        <Card.Img onClick={() => setModalShow(true)} variant='top' src={card} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{email}</Card.Subtitle>
          <Card.Text>
            Цена: <b>${id}</b>
          </Card.Text>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            addToCart={addToCart}
            id={id}
            name={name}
            email={email}
          />
          {list.includes(id) ? (
            <div>
              <Button
                variant='success'
                onClick={() => addToCart({ id, name, email })}
              >
                В корзине {sum}
              </Button>
              <Button variant='danger' onClick={() => removeFromCart(id)}>
                Убрать
              </Button>
            </div>
          ) : (
            <Button
              variant='primary'
              onClick={() => addToCart({ id, name, email })}
            >
              Добавить
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cart }
}
export default connect(mapStateToProps, { addToCart, removeFromCart })(
  CardComponent
)
