import React from 'react'
import { connect } from 'react-redux'
import { changeBground } from '../actions'

let ChangeBg = ({ dispatch }) => {

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(changeBground('blue'))
        }}
      >
        <button type="submit">
          Change Background
        </button>
      </form>
    </div>
  )
}
ChangeBg = connect()(ChangeBg)

export default ChangeBg