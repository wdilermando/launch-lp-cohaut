import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdEmail, MdPerson } from 'react-icons/md'
import { DownloadService } from '../../services/DownloadService'
import InputForm from '../molecules/inputForm'
import { ImSpinner8 } from 'react-icons/im'

interface IFormEbookValues {
  name: string
  email: string
}

type Props = {}

const EbookForm: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IFormEbookValues>()
  const onSubmit: SubmitHandler<IFormEbookValues> = async (data, e) => {
    const formatedPayload = {
      data: {
        ...data,
        ebookLink: 'https://cohaut.com/empreendimentos/cohaut-002/',
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
            Em breve você receberá no seu e-mail o link para download do e-book!
          </h3>
        )}
        <button
          type="submit"
          className="btn flex w-full items-center justify-center px-2 text-center disabled:cursor-wait disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting && <ImSpinner8 className="mr-3 animate-spin" />}
          Receber no meu e-mail
        </button>
      </div>
    </form>
  )
}

export default EbookForm
