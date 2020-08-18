import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import UserSubmitForm from "../UserSubmitForm"

const ButtonModalOrder = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Оформить
      </Button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Заказ на сумму {props.total}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserSubmitForm
            onSubmit={(value) => {
              props.clearCart()
              alert("ваш заказ принят")
            }}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ButtonModalOrder
