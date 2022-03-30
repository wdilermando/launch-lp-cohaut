import React from 'react'
import BookingForm from '../forms/bookingForm'

const BookingSection: React.FC = () => {
  return (
    <section
      className={`relative flex min-h-screen  items-center bg-lpPrimary`}
    >
      <div className="z-10 grid gap-10 px-5 py-16 lg:w-10/12 lg:grid-cols-2 lg:px-32">
        <div className="flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold leading-normal text-lpSecondary">
            VIVA ESSA <br /> EXPERIÊNCIA
          </h1>
          <h3 className="mb-16 text-lg italic text-gray-300">
            Conheça uma nova forma de morar, conectados à comunidade do futuro.
          </h3>

          <p className="text-justify leading-8 tracking-wide text-lpSecondary">
            Entre os dias{' '}
            <strong className="text-white">28 de Abril a 24 de Junho</strong>,
            você poderá ter a experiência de visitar nossos{' '}
            <strong className="text-white">
              apartamentos design, totalmente decorados
            </strong>{' '}
            por arquitetos renomados.
          </p>
          <p className="text-justify leading-8 tracking-wide text-lpSecondary">
            Vivencie também nossa exposição HAUT 5 ANOS, além de curtir uma
            programação cultural e gastronômica no café-bistrô Studio Mu. Rua
            Capitão Rebelinho, 117 - Pina Recife
          </p>
          <p className="text-justify font-bold leading-8 tracking-wide text-white">
            Rua Capitão Rebelinho, 117 - Pina Recife
          </p>
        </div>
        <div className="flex-col items-center justify-center">
          <h3 className="mb-6 text-3xl text-gray-200">Agende sua visita</h3>
          <BookingForm />
        </div>
      </div>
      <div className="absolute top-10 left-5 z-0 lg:left-20 lg:top-20">
        <img src={'images/amazing.png'} className="w-96" alt="people" />
      </div>
      <div className="absolute right-0 z-0 hidden w-1/5 lg:flex ">
        <img src={'images/sideCircle.svg'} alt="people" />
      </div>
      <div className="z-{1} absolute right-0 hidden w-1/5 lg:flex ">
        <img src={'images/woman.svg'} alt="people" />
      </div>
    </section>
  )
}

export default BookingSection
