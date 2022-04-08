import React, { useState } from 'react'
import {
  MdPerson,
  MdEmail,
  MdPhonelinkRing,
  MdCalendarToday,
  MdClear,
  MdOutlineComment,
  MdEditCalendar,
} from 'react-icons/md'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputForm from '../molecules/inputForm'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import 'react-datetime-picker/dist/DateTimePicker.css'
import { BookingService } from '../../services/BookingService'
import { ImSpinner8 } from 'react-icons/im'

export interface IFormValues {
  userName: string
  userEmail: string
  userPhone: string
  bookingTime: string
  message: string
}
type Props = {}
const BookingForm: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IFormValues>()
  const [value, onChange] = useState(new Date())
  const onSubmit: SubmitHandler<IFormValues> = async (data, e) => {
    const formatedPayload = {
      data: {
        ...data,
        bookingTime: value,
      },
    }
    try {
      await BookingService.createBooking(formatedPayload)
      e?.target.reset()
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form
        className="flex-col space-y-3 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputForm
          label="userName"
          type="text"
          placeHolder="Nome"
          icon={
            <MdPerson
              color={`${errors.userName ? 'red' : '#ccc'}`}
              className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
            />
          }
          register={register}
          required
        />
        {errors.userName && (
          <p className="pl-2 text-red-700">Informe seu nome.</p>
        )}
        <InputForm
          label="userEmail"
          type="email"
          placeHolder="Seu email"
          icon={
            <MdEmail
              color={`${errors.userEmail ? 'red' : '#ccc'}`}
              className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
            />
          }
          register={register}
          required
        />
        {errors.userEmail && (
          <p className="pl-2 text-red-700">Informe seu email.</p>
        )}
        <InputForm
          label="userPhone"
          type="phone"
          placeHolder="Telefone"
          icon={
            <MdPhonelinkRing
              color={`${errors.userPhone ? 'red' : '#ccc'}`}
              className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
            />
          }
          register={register}
          required
        />
        {errors.userPhone && (
          <p className="pl-2 text-red-700">Informe seu telefone.</p>
        )}
        <div className="w-full flex-col">
          <label className="relative block ">
            <MdCalendarToday
              color={`#ccc`}
              className="pointer-events-none absolute top-1/2 left-3 z-10 h-6 w-6 -translate-y-1/2 transform"
            />
            <DateTimePicker
              onChange={onChange}
              value={value}
              locale="pt-BR"
              calendarIcon={<MdEditCalendar color="#fff" />}
              clearIcon={<MdClear color="#fff" />}
              className="input-lp border-none bg-black"
              calendarClassName="text-gray-600"
              disableClock
              format="dd/MM/y HH:mm"
              minDate={new Date()}
              maxDate={new Date(2022, 7, 30)}
            />
          </label>
        </div>
        <div className="w-full flex-col">
          <label className="relative block ">
            <MdOutlineComment
              color={`#ccc`}
              className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
            />
            <textarea
              className="input-lp m-0 bg-black pl-12"
              placeholder="Mensagem"
              {...register('message')}
            />
          </label>
        </div>
        <div className="flex w-full items-center lg:justify-end lg:space-x-2">
          {isSubmitSuccessful && (
            <h3 className="text-xs text-white">
              Agendamento realizado com sucesso!
            </h3>
          )}
          <button
            type="submit"
            className="btn flex w-full items-center justify-center px-2 text-center disabled:cursor-wait disabled:bg-gray-400 lg:w-24"
            disabled={isSubmitting}
          >
            {isSubmitting && <ImSpinner8 className="mr-3 animate-spin" />}
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}

export default BookingForm
