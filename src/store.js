import { createStore } from 'redux'

const ADD = 'ADD'
const DELETE = 'DELETE'

const addToDo = (text) => ({
  type: ADD,
  text
})

const deleteToDo = id => ({
  type: DELETE,
  id
})


const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now()}]

    case DELETE:
      return state.filter(toDo => toDo !== action.id)

    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addToDo, 
  deleteToDo
}

export default store