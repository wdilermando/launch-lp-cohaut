import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="items-center justify-between space-y-4 bg-black py-10 px-5 text-gray-300 md:h-64 md:px-32 lg:flex">
      <div className="items-center justify-center space-y-4 md:justify-start lg:flex lg:w-8/12 lg:space-x-8">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/cohaut-logo.svg" />
        </a>
        <div className="flex flex-col items-center justify-center space-y-2 lg:items-start ">
          <p>HAUT Incorporadora Design</p>
          <p>
            JCPM Trade Center, Av. Antônio de Góes, <br /> 60 Salas 903 e 904,
            Pina - CEP 51010-000
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 lg:items-start ">
          <a
            href="tel:+55 (81) 3031-6875"
            className="flex items-center space-x-2"
          >
            <img src="images/phone.svg" />
            <span>+55 (81) 3031-6875</span>
          </a>

          <a
            href="https://haut.id"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <img src="images/globe.svg" />
            <span>haut.id</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 md:justify-end lg:w-2/12">
        <a
          href="https://api.whatsapp.com/send?phone=5581982596605&amp;text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20CO-HAUT"
          target="_blank"
        >
          <img src="images/whats-app.svg" />
        </a>
        <a href="https://www.instagram.com/haut_id/" target="_blank">
          <img src="images/instagram.svg" />
        </a>
        <a
          href="https://www.facebook.com/HautIncorporadoraDesign/"
          target="_blank"
        >
          <img src="images/facebook.svg" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
