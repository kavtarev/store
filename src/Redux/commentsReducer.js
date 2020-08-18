const NEW_COMMENT = "NEW_COMMENT"

let initialState = {
  comments: [
    { name: "Ivan", comment: "this is a greate site" },
    { name: "Not Ivan", comment: "you should hire this guy" },
  ],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_COMMENT: {
      return { ...state, comments: [...state.comments, action.data] }
    }

    default:
      return state
  }
}

export default commentsReducer

export const CommentsAC = (data) => {
  return { type: NEW_COMMENT, data: { name: data.name, comment: data.comment } }
}
