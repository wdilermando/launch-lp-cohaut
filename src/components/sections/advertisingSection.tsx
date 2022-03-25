import React from 'react'
const POSTS = [0, 1, 2, 3, 4, 5]
const AdvertisingSection: React.FC = () => {
  const postsToShow = POSTS

  return (
    <section className={`relative flex min-h-screen  bg-lpSecondary`}>
      <div className="z-10 space-x-4 space-y-4 py-16 px-5 lg:flex lg:px-32">
        <div className="flex flex-col items-center justify-between pl-3 lg:w-2/12 lg:items-start lg:border-r  lg:border-slate-800">
          <img src={'images/studio.jpg'} alt="studio" />
          <img src="images/cohaut-logo-horizontal-black.svg" />
        </div>
        <div className="flex flex-col items-end justify-end lg:w-5/12">
          <p className="text-base text-slate-800">
            Nam porttitor nunc eu maximus tempus. Nulla ultricies euismod enim,
            eget aliquet arcu posuere id. Donec eget ante eget nisi eleifend
            commodo. Aenean finibus semper metus. Nam facilisis sollicitudin dui
            sit amet convallis. Integer at metus nec magna fringilla convallis.
            Aliquam erat volutpat. Integer dignissim tincidunt purus ut aliquam.
            Duis et viverra nibh, non pellentesque ipsum. Donec elementum
            accumsan nulla et efficitur. Suspendisse tellus est, viverra nec
            luctus sed, euismod eu erat. Nunc in feugiat ligula. Nam tincidunt
            augue sed ligula maximus, eget ultricies ex ornare. Nulla orci ante,
            lobortis sed posuere in, finibus vitae leo. Donec sed massa quis
            turpis faucibus interdum.
          </p>
        </div>
        <div className="flex-col items-center justify-center lg:w-5/12">
          <div className=" hidden gap-4 lg:grid lg:grid-cols-2">
            {postsToShow.map((post) => (
              <img
                src="images/mu-1.jpg"
                className="h-44 w-full rounded-md object-cover shadow-md"
              />
            ))}
          </div>
          <div className="lg:hidden">
            <div className="grid gap-4 lg:grid-cols-2">
              {postsToShow.slice(3).map((post) => (
                <img
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
