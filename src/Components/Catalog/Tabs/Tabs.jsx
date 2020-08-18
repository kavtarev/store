import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import { sortItems, searchFor } from "../../../Redux/catalogReducer"
import { connect } from "react-redux"
import style from "./tabs.module.css"

function ControlledTabs(props) {
  const [key, setKey] = useState("home")

  return (
    <div className={style.mainDiv}>
      <Tabs
        className={style.tabs}
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => {
          setKey(k)
          props.sortItems(k)
        }}
      >
        <Tab color='danger' eventKey='name' title='имя'></Tab>
        <Tab eventKey='email' title='почта'></Tab>
        <Tab eventKey='idUp' title='цена(возростание)'></Tab>
        <Tab eventKey='idDown' title='цена(убывание)'></Tab>
      </Tabs>
      <input
        className={style.myinput}
        placeholder='поиск по имени'
        value={props.inputvalue}
        onChange={(e) => props.searchFor(e.target.value)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { inputvalue: state.users.inputvalue }
}
export default connect(mapStateToProps, { sortItems, searchFor })(
  ControlledTabs
)
