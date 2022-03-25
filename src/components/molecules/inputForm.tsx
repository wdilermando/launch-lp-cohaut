import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
  label: string
  type: string
  placeHolder: string
  icon: any
  register: UseFormRegister<any>
  required: boolean
}

const InputForm = ({
  label,
  type,
  placeHolder,
  icon,
  register,
  required,
}: InputProps) => {
  return (
    <div className="w-full flex-col">
      <label className="relative block ">
        {' '}
        {icon}
        <input
          type={type}
          placeholder={placeHolder}
          className="input-lp m-0 bg-black pl-12"
          {...register(label, { required })}
        />
      </label>
    </div>
  )
}

export default InputForm
