import { createStore } from 'redux'

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = 'ADD'
const MINUS = 'MINUS'

const countModifier = (count = 0, action) => {
  // console.log(action)
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}
 
const countStore = createStore(countModifier)

const onChange = () => {
  // console.log(countStore.getState())
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

// console.log(countStore, countStore.getState())

// countStore.dispatch({ type: "ADD" })

// console.log(countStore.getState())

add.addEventListener("click", () => countStore.dispatch({ type: ADD }))
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }))

