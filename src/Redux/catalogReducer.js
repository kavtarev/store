import { ItemsAPI } from "../API/api"

const GET_USERS = "GET_USERS"
const IS_LOADING = "IS_LOADING"
const SORT_ITEMS = "SORT_ITEMS"
const SEARCH_FOR = "SEARCH_FOR"

let initialState = {
  users: [],
  loading: false,
  inputvalue: "",
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case IS_LOADING:
      return { ...state, loading: !state.loading }
    case SORT_ITEMS:
      return {
        ...state,
        users: [
          ...state.users.sort((a, b) => {
            switch (action.method) {
              case "name":
              case "email":
                if (a[action.method] > b[action.method]) return 1
                if (a[action.method] === b[action.method]) return 0
                if (a[action.method] < b[action.method]) return -1
              case "idUp":
                return a.id - b.id
              case "idDown":
                return b.id - a.id
              default:
                return state
            }
            //if (a[action.method] > b[action.method]) return 1
            // if (a[action.method] == b[action.method]) return 0
            // if (a[action.method] < b[action.method]) return -1
            //return b[action.method] - a[action.method]
          }),
        ],
      }
    case SEARCH_FOR:
      return { ...state, inputvalue: action.value }
    default:
      return state
  }
}

export default usersReducer

export const setUsers = (users) => {
  return { type: GET_USERS, users }
}

export const isLoading = () => {
  return { type: IS_LOADING }
}

export const sortItems = (method) => {
  return { type: SORT_ITEMS, method }
}

export const searchFor = (value) => {
  return { type: SEARCH_FOR, value }
}

export const ItemsTHUNK = () => {
  return (dispatch) => {
    dispatch(isLoading())
    setTimeout(
      () =>
        ItemsAPI.getItems().then((response) => {
          dispatch(setUsers(response))
          dispatch(isLoading())
        }),
      200
    )
  }
}
