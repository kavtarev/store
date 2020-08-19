import React from "react"
import "./App.css"
import HeaderContainer from "./Components/Header/HeaderContainer"
import { Route } from "react-router-dom"
import SuspenceHOC from "./Components/HOCs/SuspenceHOC"

const Catalog = React.lazy(() => import("./Components/Catalog/Catalog"))
const Cart = React.lazy(() => import("./Components/Cart/Cart"))

function App() {
  return (
    <div>
      <HeaderContainer />
      <Route exact path='/' render={SuspenceHOC(Catalog)} />
      <Route path='/card' render={SuspenceHOC(Cart)} />
    </div>
  )
}

export default App
