import React, { Suspense } from "react"
import Preloader from "../../Common/preloader/preloader"

const SuspenceHOC = (Component) => {
  const containerComponent = (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    )
  }
  return containerComponent
}

export default SuspenceHOC
