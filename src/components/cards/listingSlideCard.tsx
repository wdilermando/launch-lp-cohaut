import React from 'react'

type Props = {
  slideActive?: any
  listingId?: number
}

const ListingSlideCard: React.FC<Props> = ({ slideActive, listingId }) => {
  return (
    <div
      className={`flex-col items-center ${
        !slideActive && 'opacity-50'
      } mx-auto my-0 w-64 justify-between gap-4 lg:flex lg:w-11/12 lg:flex-row lg:space-x-4`}
    >
      <div className="order-last my-8 flex w-full space-x-3 lg:w-9/12">
        <img
          className="min-h-96 max-h-96 w-full rounded-md object-cover lg:rounded-lg"
          src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
        />
        <div className="hidden max-h-96 w-52 flex-col items-center justify-between lg:flex">
          {[1, 2, 3, 4].map((photo, index) => (
            <img
              key={index}
              className="h-20 w-full rounded-md object-cover lg:rounded-lg"
              src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
            />
          ))}
        </div>
      </div>
      <div className="order-first  flex w-full flex-col items-start justify-between space-y-4 lg:my-0 lg:w-3/12">
        <h2 className="text-4xl font-bold md:text-6xl">00{listingId}.</h2>
        <p className="text-justify text-xs md:text-sm">
          Nam porttitor nunc eu maximus tempus. Nulla ultricies euismod enim,
          eget aliquet arcu posuere id. Donec eget ante eget nisi eleifend
          commodo. Aenean finibus semper metus. Nam facilisis sollicitudin dui
          sit amet convallis. Integer at metus nec magna fringilla convallis.
          Aliquam erat volutpat. Integer dignissim tincidunt purus ut aliquam.
          Duis et viverra nibh, non pellentesque ipsum. Donec elementum accumsan
          nulla et efficitur.
        </p>

        <div className="w-full flex-col text-xs">
          <small className="text-gray-600">RECIFE - POCO DA PANELA</small>
          <span className="flex items-center justify-between ">
            <h4 className="text-gray-300">Rua Chacon, 297</h4>
            <h5 className="italic text-gray-400">28 m² a 48 m²</h5>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ListingSlideCard
