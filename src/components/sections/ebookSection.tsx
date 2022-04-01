import React from 'react'
import EbookForm from '../forms/ebookForm'

const EbookSection: React.FC = () => {
  return (
    <section className={`bg-lpPrimary py-16`}>
      <div className="w-full flex-col items-end justify-between space-x-3 px-5 lg:relative lg:flex lg:h-screen lg:flex-row lg:px-32">
        <div className="relative z-20 w-full items-center lg:h-full lg:w-8/12">
          <img
            src="/images/ebook.png"
            alt=""
            className="top-28 z-20 hidden lg:absolute lg:block"
          />
          <h1 className="z-10 text-center text-4xl font-bold text-lpSecondary lg:hidden">
            E-BOOK
          </h1>
          <img
            src="/images/mock.png"
            className="top-20 z-0 lg:absolute lg:w-5/6"
            alt=""
          />
        </div>
        <div className="z-20 text-white lg:right-32 lg:bottom-16 lg:w-4/12">
          <EbookForm />
        </div>
        <img
          src="/images/person-up-side-down.png"
          className="top-20 right-72 z-10 hidden lg:absolute lg:block lg:w-5/12"
          alt=""
        />
        <img
          src="/images/amazing.png"
          className="top-20 right-0 z-0 hidden lg:absolute lg:block lg:w-4/12"
          alt=""
        />
      </div>
    </section>
  )
}

export default EbookSection
