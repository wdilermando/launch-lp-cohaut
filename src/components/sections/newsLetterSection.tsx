import React from 'react'
import EbookForm from '../forms/ebookForm'
import Arrows from '../molecules/arrows'

const NewsLetterSection: React.FC = () => {
  return (
    <section className={`flex min-h-screen items-center bg-lpPrimary`}>
      <div className="flex h-full w-full flex-col justify-between space-y-10 px-5 py-16 lg:px-32">
        <h3 className="text-2xl uppercase text-lpSecondary">
          Area do investidor
        </h3>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div className="my-10 w-full space-y-4 lg:my-0 lg:w-4/12">
            <p className="text-center text-lg uppercase text-slate-300">
              Receba conteúdos exclusivos, feitos para quem se{' '}
              <span className="text-lpSecondary">CO-</span>NECTA com o futuro.
            </p>
            <EbookForm />
          </div>
          <div className="order-first flex  w-full flex-col items-center space-y-4 lg:order-last lg:flex-row lg:space-y-0 lg:space-x-4">
            {[1, 2].map((card, index) => (
              <div
                key={index}
                className="w-72 rounded-xl bg-black text-lpSecondary"
              >
                <img
                  src="/images/architects/photo2.jpg"
                  alt=""
                  className="h-72 w-full rounded-t-xl object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl">
                    5 maiores vantages de comprar na planta
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <Arrows />
          <img src="images/cohaut-logo-horizontal.svg" />
        </div>
      </div>
    </section>
  )
}

export default NewsLetterSection
