import React from 'react'
import BookingForm from '../forms/bookingForm'

const BookingSection: React.FC = () => {
  return (
    <section className={`relative flex min-h-screen items-center bg-lpPrimary`}>
      <div className="z-10 grid gap-10 px-5 lg:w-10/12 lg:grid-cols-2 lg:px-32">
        <div className="flex-col items-center justify-center">
          <h1 className="mb-10 text-4xl font-bold text-lpSecondary">
            VIVA ESSA EXPERIÊNCIA
          </h1>
          <p className="text-justify text-lpSecondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex-col items-center justify-center">
          <h3 className="mb-6 text-3xl text-gray-200">Agende sua visita</h3>
          <BookingForm />
        </div>
      </div>
      {/* <div className="absolute left-20 z-0 hidden lg:flex">
    <img src={'images/hero-people.jpg'} alt="people" />
  </div> */}
      <div className="absolute right-0 z-0 hidden lg:flex">
        <img src={'images/hero-people.jpg'} alt="people" />
      </div>
    </section>
  )
}

export default BookingSection
