import React from "react"
import Header from "./Header"
import { connect } from "react-redux"

const HeaderContainer = (props) => {
  return (
    <div>
      <Header cart={props.cart} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cart }
}

export default connect(mapStateToProps)(HeaderContainer)
