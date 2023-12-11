import React from 'react'

export const Button = ({name,onClick,style}) => {
  return (
    <button id={name} onClick={onClick} className={style}>{name}</button>
  )
}

export default Button;