import React from 'react'
import EbookForm from '../forms/ebookForm'

const EbookSection: React.FC = () => {
  return (
    <section className={`bg-lpPrimary py-16`}>
      <div className="w-full flex-col items-center justify-center space-x-3 px-5 lg:relative lg:flex lg:flex-row lg:px-32">
        <div className="w-full lg:w-2/12">
          <img src="/images/ebook.png" alt="" className="hidden lg:block" />
          <h1 className="text-center text-4xl font-bold text-lpSecondary lg:hidden">
            E-BOOK
          </h1>
        </div>
        <div className="w-full text-white">
          <img src="/images/bg-mock.png" alt="" />
        </div>
        <div className="text-white lg:absolute lg:right-32 lg:bottom-16 lg:w-3/12">
          <EbookForm />
        </div>
      </div>
    </section>
  )
}

export default EbookSection
