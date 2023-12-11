import React from 'react'

export const Label = (prop) => {
  return (
    <label {...prop}> {prop.htmlFor}</label>
  )
}

export default Label;