import React from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "./validators/validators"
import { InputForm, TextAreaForm } from "./forms/forms"
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "react-bootstrap/Button"




const UserSubmitForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
     
      <div>
        <label> Ваше имя </label>
        <div>
          <Field
            name="firstName"
            component={InputForm}
            type="text"
            placeholder="First Name"
            validate={[required]}
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={InputForm}
            type="email"
            placeholder="Email"
            validate={[required]}
          />
        </div>
      </div>
      <div>
        <label>Номер вашего телефона</label>
        <div>
          <Field
            name="phone"
            component={InputForm}
            type="phone"
            placeholder="phone"
            validate={[required]}
          />
        </div>
      </div>
      <div>
        <label>Пожелания к заказу</label>
        <div>
          <Field
            name="requests"
            component={TextAreaForm}
            type="email"
            placeholder="Requests"
          />
        </div>
      </div>
  
<Button variant="secondary" onClick={props.handleClose}>
            Отмена
          </Button>
          <Button type="submit" variant="primary">Заказать</Button>
      
    </form>
  )
}

export default reduxForm({ form: "SubmitOrder" })(UserSubmitForm)
