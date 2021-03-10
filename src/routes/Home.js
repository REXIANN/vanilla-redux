import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Home({ toDos, addToDo }) {

  const [text, setText] = useState('')

  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    setText('')
    addToDo(text)
  }

  return (
    <>
      <h1> To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button> 
      </form>

      <ul>{JSON.stringify(toDos)}</ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  // ownProps has history, location, match, staticContext by react-router
  return { 
    toDos: state
  }
}

function mapDispatchToProps(dispatch) {
  // disaptch print하면 이상한거 줄줄 나옴
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)