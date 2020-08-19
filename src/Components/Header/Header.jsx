import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={style.maincontainer}>
      <div className={style.linkdiv}>
        <NavLink to='/' className={style.link}>
          Catalog
        </NavLink>
      </div>
      <div className={style.linkdiv}>
        <NavLink to='/card' className={style.link}>
          Card
          {props.cart.length !== 0 && <span> ({props.cart.length})</span>}
        </NavLink>
      </div>
    </div>
  )
}

export default Header
