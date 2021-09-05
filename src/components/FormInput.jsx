import React from 'react'

const FormInput = ({label, type, name}) => {
  return (
    <div className="relative w-full textInput">
      <input
        className="w-full p-4 placeholder-gray-400 rounded focus:border-b-2 focus:border-primary bg-formDark focus:outline-none"
        type= {type}
        name={name}
        id=""
        placeholder= {label}
      />
    </div>
  )
}

export default FormInput
