import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section
      className={`flex min-h-screen items-center justify-between bg-lpSecondary`}
    >
      <div className="flex items-center justify-center p-5 md:m-20 md:w-4/5 md:p-20">
        <img
          src={'images/hero-image-title.png'}
          className="w-full lg:w-1/2"
          alt="title"
        />
      </div>
      <div className="hidden items-end md:flex md:w-1/5">
        <img src={'images/hero-people.png'} alt="people" />
      </div>
    </section>
  )
}

export default HeroSection
