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
import InputForm from './inputForm'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import 'react-datetime-picker/dist/DateTimePicker.css'

export interface IFormValues {
  name: string
  email: string
  phone: string
  bookingDate: string
  message: string
}

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<IFormValues>()
  const [value, onChange] = useState(new Date())
  const onSubmit: SubmitHandler<IFormValues> = (data, e) => {
    console.log('====================================', errors)
    console.log({
      ...data,
      bookingDate: `${value.toLocaleDateString(
        'pt-BR'
      )} ${value.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })}`,
    })
    console.log('====================================')
    e?.target.reset()
  }

  return (
    <form
      className="flex-col space-y-3 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      {JSON.stringify(isValidating)}
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
      <InputForm
        label="phone"
        type="phone"
        placeHolder="Telefone"
        icon={
          <MdPhonelinkRing
            color={`${errors.phone ? 'red' : '#ccc'}`}
            className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
          />
        }
        register={register}
        required
      />
      {errors.phone && (
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
            required
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

      <div className="flex w-full lg:justify-end">
        <button type="submit" className="btn w-full px-2 lg:w-24">
          Enviar
        </button>
      </div>
    </form>
  )
}

export default BookingForm
