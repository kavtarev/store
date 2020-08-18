import React from "react"
import preloader from "../../assets/preloader.gif"

const Preloader = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img width='50%' src={preloader} alt='' />
    </div>
  )
}

export default Preloader
