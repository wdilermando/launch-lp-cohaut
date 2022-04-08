import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdEmail, MdPerson } from 'react-icons/md'
import InputForm from '../molecules/inputForm'

interface IFormNewsLetterValues {
  name: string
  email: string
}
type Props = {}
const NewsLetterForm: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormNewsLetterValues>()
  const onSubmit: SubmitHandler<IFormNewsLetterValues> = (data, e) => {
    console.log(data)

    e?.target.reset()
  }
  return (
    <form
      className="flex-col space-y-3 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        label="name"
        type="text"
        placeHolder="Nome"
        icon={
          <MdPerson
            color={`${errors.name ? 'red' : '#ccc'}`}
            className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
          />
        }
        register={register}
        required
      />
      {errors.name && <p className="pl-2 text-red-700">Informe seu nome.</p>}
      <InputForm
        label="email"
        type="email"
        placeHolder="Seu email"
        icon={
          <MdEmail
            color={`${errors.email ? 'red' : '#ccc'}`}
            className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
          />
        }
        register={register}
        required
      />
      {errors.email && <p className="pl-2 text-red-700">Informe seu email.</p>}

      <div className="flex w-full lg:justify-end">
        <button
          type="submit"
          className="btn w-full bg-lpSecondary px-2 uppercase text-black hover:bg-lpSecondary2"
        >
          Cadastrar meu e-mail
        </button>
      </div>
    </form>
  )
}

export default NewsLetterForm