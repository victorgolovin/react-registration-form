import React from 'react'
import "./FormInput.css"

const FormInput = ( {className, type, name, placeholder, onChange} ) => {

  return (
    <input 
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}

export default FormInput