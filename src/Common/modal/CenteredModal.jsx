import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Something important about <b>{props.name}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Some details</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sunt. <b>{props.email}</b>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorem necessitatibus non error cupiditate atque, perspiciatis unde tenetur distinctio. Recusandae veritatis saepe quam voluptate labore! <b>{props.id}</b>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button 
          variant="success"
          onClick={()=>props.addToCart({id:props.id,name:props.name,email:props.email})}
        >Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal