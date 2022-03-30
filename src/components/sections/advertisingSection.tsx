import React from 'react'
const POSTS = [0, 1, 2, 3, 4, 5]
const AdvertisingSection: React.FC = () => {
  const postsToShow = POSTS

  return (
    <section className={`relative flex min-h-screen  bg-lpSecondary`}>
      <div className="z-10 items-end space-y-4 space-x-4 py-16 px-5 lg:flex lg:px-32">
        <div className="flex flex-col items-center justify-between py-5  lg:h-full lg:w-2/12 lg:items-start lg:border-r  lg:border-slate-800">
          <img src={'images/studio.jpg'} alt="studio" />
          <img src="images/cohaut-logo-horizontal-black.svg" />
        </div>
        <div className="flex flex-col justify-end lg:h-full lg:w-5/12">
          <p className="text-base font-semibold text-slate-800">
            Para nos acompanhar no LANÇAMENTO CO-HAUT, contamos com o Studio Mu,
            o café-bistrô idealizado pelo chef Matheus Uchôa, que promete tornar
            a experiência gastronômica do evento inovadora. Com pratos cheios de
            capricho e únicos em cada detalhe, a Cozinha Experimental vem para
            mostrar que a gastronomia e a arte andam juntas, deixando o ambiente
            mais belo e, é claro, mais saboroso.
          </p>
        </div>
        <div className="flex-col items-end justify-end  lg:w-4/12">
          <div className="hidden gap-4 lg:grid lg:grid-cols-2">
            {postsToShow.map((post) => (
              <img
                key={post}
                src="images/mu-1.jpg"
                className="h-44 w-full rounded-md object-cover shadow-md"
              />
            ))}
          </div>
          <div className="lg:hidden">
            <div className="grid items-end gap-4 lg:grid-cols-2">
              {postsToShow.slice(3).map((post) => (
                <img
                  key={post}
                  src="images/mu-1.jpg"
                  className="h-44 w-full rounded-md object-cover shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 z-0 hidden lg:flex">
        <img src={'images/hero-people.jpg'} alt="people" />
      </div>
    </section>
  )
}

export default AdvertisingSection
