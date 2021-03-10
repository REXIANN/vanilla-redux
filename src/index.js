import { createStore } from 'redux'

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")



const countModifier = (count = 0, action) => {
  // console.log(action)
  if (action.type ==="ADD") {
    return count + 1
  } else if (action.type === 'MINUS') {
    return count - 1
  }
  return count
}
 
const countStore = createStore(countModifier)

const onChange = () => {
  // console.log(countStore.getState())
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

// console.log(countStore, countStore.getState())

countStore.dispatch({ type: "ADD" })

// console.log(countStore.getState())

add.addEventListener("click", () => countStore.dispatch({ type: 'ADD' }))
minus.addEventListener("click", () => countStore.dispatch({ type: 'MINUS' }))

