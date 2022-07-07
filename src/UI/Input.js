import React from 'react'

const Input = (props) => {
  return (
    <>
        <label>{props.input.label}</label>
        <input {...props.input} />
    </>
  )
}

export default Input