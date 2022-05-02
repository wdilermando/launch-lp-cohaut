import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ImSpinner8 } from 'react-icons/im'
import { MdEmail, MdPerson } from 'react-icons/md'
import { DownloadService } from '../../services/DownloadService'
import InputForm from '../molecules/inputForm'

interface IFormNewsLetterValues {
  name: string
  email: string
}
type Props = {
  book: string
  title: string
}
const NewsLetterForm: React.FC<Props> = ({ book, title }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<IFormNewsLetterValues>()
  const onSubmit: SubmitHandler<IFormNewsLetterValues> = async (data, e) => {
    const formatedPayload = {
      data: {
        ...data,
        ebookLink: `https://cohaut.com/lancamento/public/${book}.pdf`,
        ebookName: title,
      },
    }
    try {
      await DownloadService.subscribeDownload(formatedPayload)
      e?.target.reset()
      reset()
    } catch (error) {
      console.log(error)
    }
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
        {isSubmitSuccessful && (
          <h3 className="text-xs text-white">
            Seu e-book em breve estara na sua caixa de e-mail.
          </h3>
        )}
        <button
          type="submit"
          className="btn w-full bg-lpSecondary px-2 uppercase text-black hover:bg-lpSecondary2 disabled:cursor-wait"
          disabled={isSubmitting}
        >
          {isSubmitting && <ImSpinner8 className="mr-3 animate-spin" />}
          Clique aqui para baixar
        </button>
      </div>
    </form>
  )
}

export default NewsLetterForm
