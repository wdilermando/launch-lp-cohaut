import React from 'react'

const ArchitectCard: React.FC = () => {
  return (
    <div className="relative mx-auto w-56 flex-col items-center space-y-3 text-lpSecondary">
      <p className="absolute -top-2 text-base ">
        <img src="images/cohaut-logo-horizontal.svg" width={64} />
        001.
      </p>
      <img src="images/arc_1.jpg" width={224} />
      <h3 className="text-xl">Andre Caricio</h3>
      <p className="text-justify text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis,
        velit ac lacinia malesuada, felis augue ultrices urna, vel tincidunt
        lacus dolor id augue. Sed varius diam facilisis tincidunt euismod.
        Maecenas sagittis sed mi eu pellentesque. Aliquam pulvinar ac justo sit
        amet condimentum. Donec arcu felis, gravida non justo pharetra,
        consectetur egestas sem. Ut laoreet aliquet orci quis tristique. Proin
        in metus sed lorem consequat finibus. Nam ut posuere mi.
      </p>
    </div>
  )
}

export default ArchitectCard
