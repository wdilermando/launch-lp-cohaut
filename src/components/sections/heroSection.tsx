import React from 'react'

type Props = {}

const HeroSection: React.FC<Props> = () => {
  return (
    <section
      className={`flex h-screen items-center justify-between bg-lpSecondary lg:relative`}
    >
      <div className="z-10 flex items-center justify-center px-5 lg:px-32">
        <img
          src={'images/hero-image-title.png'}
          className="w-full lg:w-2/4"
          alt="cohaut title"
        />
      </div>
      <div className="absolute right-0 z-0 hidden items-end md:flex">
        <img src={'images/hero-people.png'} className="h-screen" alt="people" />
      </div>
    </section>
  )
}

export default HeroSection
