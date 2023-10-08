import React from 'react'
import "./FormButton.css"


const FormButton = ( {className, onClick, text} ) => {

  return (
    <button
        className={className}
        onClick={onClick}>
        {text}
    </button>
  )
}

export default FormButton