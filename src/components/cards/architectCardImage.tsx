import React from 'react'

type Props = {
  imgSrc: string
  listingId: string
  name: string
  description: string
}

const ArchitectCardImage: React.FC<Props> = ({
  imgSrc,
  description,
  listingId,
  name,
}) => {
  return (
    <div className="fix-hover-card group relative w-full cursor-pointer">
      <img
        src={`/images/architects/${imgSrc}`}
        alt=""
        className="h-screen w-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:scale-105 "
      />
      <div className="absolute bottom-5 hidden flex-col items-center justify-center space-y-4 p-10 text-white lg:block">
        <div className="translate-y-28 transition-all duration-300 ease-in-out group-hover:translate-y-0">
          <h4 className="text-xl font-light shadow-sm">CO-HAUT</h4>
          <h4 className="mb-2 text-xl font-bold shadow-sm">{listingId}.</h4>
          <h3 className="text-3xl">{name}</h3>
        </div>
        <p className="translate-y-6 text-justify text-sm opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-95">
          {description}
        </p>
      </div>
      <div className="absolute bottom-5 block flex-col items-center justify-center space-y-4 p-10 text-white lg:hidden">
        <div className="">
          <h4 className="text-xl font-light shadow-sm">CO-HAUT</h4>
          <h4 className="mb-2 text-xl font-bold shadow-sm">{listingId}.</h4>
          <h3 className="text-3xl">{name}</h3>
        </div>
        <p className="text-justify text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ArchitectCardImage
