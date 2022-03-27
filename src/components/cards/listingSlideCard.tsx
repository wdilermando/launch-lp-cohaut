import React from 'react'

type Props = {
  slideActive?: any
}

const ListingSlideCard: React.FC<Props> = ({ slideActive }) => {
  return (
    <div
      className={`flex-col items-start ${
        !slideActive && 'opacity-50'
      } mx-auto my-0 w-64 lg:flex lg:w-11/12 lg:flex-row lg:space-x-4`}
    >
      <div className="my-8 flex w-full flex-col items-start justify-between space-y-4 lg:my-0 lg:w-3/12">
        <h2 className="text-4xl md:text-6xl font-bold">004.</h2>
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
      <div className="relative w-full lg:w-9/12">
        <img
          className="min-h-96 max-h-96 w-full rounded-md object-cover lg:rounded-lg"
          src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
        />
        <div className="absolute right-5 top-5 hidden w-52 flex-col items-center space-y-5 lg:flex">
          <img
            className="h-24 w-full rounded-md object-cover lg:rounded-lg"
            src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
          />
          <img
            className="h-24 w-full rounded-md object-cover lg:rounded-lg"
            src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
          />
          <img
            className="h-24 w-full rounded-md object-cover lg:rounded-lg"
            src="https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default ListingSlideCard
