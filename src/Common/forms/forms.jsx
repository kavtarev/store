import React from "react"
import style from "./forms.module.css"

export const InputForm = ({ input, meta, ...props }) => {
  return (
    <div className={style.inputsDiv}>
      <input required={true} {...input} {...props} />
    </div>
  )
}

export const TextAreaForm = ({ input, meta, ...props }) => {
  return (
    <div className={style.areaDiv}>
      <textarea {...input} {...props} />
      {meta.visited && <div>{meta.error}</div>}
    </div>
  )
}
