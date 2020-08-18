const { default: Axios } = require("axios")

let instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})

export const ItemsAPI = {
  getItems() {
    return instance.get("users").then((response) => response.data)
  },
}
