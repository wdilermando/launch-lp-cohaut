import React from 'react'
import NewsLetterForm from '../forms/newsLetterForm'
import Arrows from '../molecules/arrows'

type Props = {}

const NewsLetterSection: React.FC<Props> = () => {
  const posts = [
    {
      id: 1,
      title: '5 maiores vantagens de comprar na planta',
      imgSrc: 'images/newsletter/post2.png',
    },
    {
      id: 2,
      title: 'O que não pode faltar no investidor do futuro',
      imgSrc: 'images/newsletter/post1.png',
    },
  ]
  return (
    <section className={`relative flex min-h-screen items-center bg-lpPrimary`}>
      <div className="z-20 flex h-full w-full flex-col justify-between space-y-10 px-5 py-16 lg:absolute lg:px-32">
        <h3 className="text-2xl font-bold uppercase text-lpSecondary">
          ÁREA DO <br />
          INVESTIDOR
        </h3>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div className="my-10 w-full space-y-4 lg:my-0 lg:w-4/12">
            <p className="text-lg uppercase text-slate-300">
              Receba conteúdos exclusivos, feitos para quem se{' '}
              <span className="text-lpSecondary">CO-</span>NECTA com o futuro.
            </p>
            <NewsLetterForm />
          </div>
          <div className="order-first flex w-full flex-col items-center space-y-4 lg:order-last lg:flex-row lg:space-y-0 lg:space-x-4">
            {posts.map((card) => (
              <div
                key={card.id}
                className="w-72 rounded-xl bg-black text-lpSecondary"
              >
                <img
                  src={card.imgSrc}
                  alt=""
                  className="h-72 w-full rounded-t-xl object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl">{card.title}</h4>
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
      <img
        src="images/person-with-glasses.png"
        alt=""
        className="absolute right-0 z-10 hidden w-2/6 lg:absolute lg:block"
      />
      <img
        src="/images/amazing.png"
        className="top-20 right-0 z-0 hidden lg:absolute lg:block lg:w-2/6"
        alt=""
      />
    </section>
  )
}

export default NewsLetterSection
