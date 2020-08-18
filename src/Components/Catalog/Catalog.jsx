import React from "react"
import style from "./Catalog.module.css"
import { connect } from "react-redux"
import { ItemsTHUNK } from "../../Redux/catalogReducer"
import CardComponent from "./card/card"
import Preloader from "../../Common/preloader/preloader"
import ControlledTabs from "./Tabs/Tabs"

class Catalog extends React.Component {
  componentDidMount() {
    this.props.ItemsTHUNK()
  }
  render() {
    return this.props.loading ? (
      <Preloader />
    ) : (
      <div className={style.cardContainer}>
        <div>
          <ControlledTabs />
        </div>
        <div className={style.cardsDiv}>
          {this.props.users
            .filter((item) => {
              return this.props.inputvalue === 0
                ? item
                : item.name
                    .toLowerCase()
                    .includes(this.props.inputvalue.toLowerCase())
            })
            .map((item) => (
              <CardComponent
                key={item.id}
                id={item.id}
                name={item.name}
                email={item.email}
              />
            ))}
        </div>
      </div>
    )
    /*   <div className={style.main}>
        <ul>
          <li
            id={"list"}
            onClick={() =>
              document
                .getElementById("list")
                .children[0].classList.toggle(style.visible)
            }
          >
            users
            <ul className={style.usersUl}>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ul>
          </li>
        </ul>
      </div> */
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    inputvalue: state.users.inputvalue,
  }
}

export default connect(mapStateToProps, { ItemsTHUNK })(Catalog)
