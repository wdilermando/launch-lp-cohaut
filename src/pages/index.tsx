import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SectionDefault from '../components/sectionDefault'
import { MdDesktopWindows } from 'react-icons/md'
import InputForm from '../components/inputForm'
import BookingForm from '../components/bookingForm'

const Home: NextPage = () => {
  const sections = [
    { title: 'willamis' },
    { title: 'dayanne' },
    { title: 'Meg' },
  ]

  return (
    <div className="h-screen w-screen overflow-scroll scrollbar-hide">
      <Head>
        <title>Lançamento COHAUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className={`flex min-h-screen  items-center justify-between bg-lpSecondary`}
      >
        <div className="flex items-center justify-center p-5 md:m-20 md:w-4/5 md:p-20">
          <img src={'images/hero-img-title.jpg'} alt="title" />
        </div>
        <div className="hidden items-end md:flex md:w-1/5">
          <img src={'images/hero-people.jpg'} alt="people" />
        </div>
      </section>

      <section
        className={`relative flex min-h-screen  items-center bg-lpPrimary`}
      >
        <div className="z-10 grid gap-10 p-5 lg:w-10/12 lg:grid-cols-2 lg:px-48">
          <div className="flex-col items-center justify-center">
            <h1 className="mb-10 text-4xl font-bold text-lpSecondary">
              VIVA ESSA EXPERIÊNCIA
            </h1>
            <p className="text-justify text-lpSecondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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

      {sections.map((section, index) => (
        <article key={index}>
          <SectionDefault title={section.title} />
        </article>
      ))}

      <footer className="flex h-24  items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
