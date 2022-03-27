import React from 'react'

const AgendaSection: React.FC = () => {
  const agenda = [
    {
      id: 1,
      agendaDate: new Date(2022, 3, 24),
      agendaEvents: [
        {
          eventName: 'Cafe da Manha',
          eventTime: new Date(2022, 3, 24, 9),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Palestra',
          eventTime: new Date(2022, 3, 24, 10),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Visitas',
          eventTime: new Date(2022, 3, 24, 13),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
      ],
    },
    {
      id: 2,
      agendaDate: new Date(2022, 3, 25),
      agendaEvents: [
        {
          eventName: 'Cafe da Manha',
          eventTime: new Date(2022, 3, 24, 9),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Palestra',
          eventTime: new Date(2022, 3, 24, 10),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Visitas',
          eventTime: new Date(2022, 3, 24, 13),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
      ],
    },
    {
      id: 3,
      agendaDate: new Date(2022, 3, 26),
      agendaEvents: [
        {
          eventName: 'Cafe da Manha',
          eventTime: new Date(2022, 3, 24, 9),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Palestra',
          eventTime: new Date(2022, 3, 24, 10),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
        {
          eventName: 'Visitas',
          eventTime: new Date(2022, 3, 24, 13),
          eventDescription: 'adadasdsaassad, asdsadasdasa',
        },
      ],
    },
  ]

  return (
    <section className={`flex min-h-screen items-center py-16 lg:py-0 bg-lpPrimary`}>
      <div className="w-full flex-col space-y-10 py-16 px-5 lg:px-32">
        <div className="flex justify-between">
          <h3 className="text-2xl  text-lpSecondary shadow-sm">PROGRAMAÇÃO</h3>
          <img src="images/dots.jpg" />
        </div>
        {/* Exibe em telas menores */}
        <div className="lg:hidden">
          {[0, 1, 2, 3, 5].map((event) => (
            <div>
              <div className="w-full p-3  text-lpSecondary lg:w-64">
                <h4 className="text-2xl font-bold italic">22</h4>
                <p className="text-sm">Marco</p>
              </div>
              <div className="w-full justify-start rounded-md bg-lpSecondary lg:flex">
                <div className="w-full flex-col items-center  rounded-md  text-white even:bg-lpSecondary2 lg:w-64">
                  {[0, 1, 2, 3, 4].map((eventDetail) => (
                    <div className="w-full flex-col items-start border-b border-slate-800 p-3  last:border-none">
                      <p>
                        <strong>9h</strong> Evento XPTO
                      </p>
                      <small>Descricao do evento</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Exibe somente em telas maiores */}
        <div className="hidden flex-col lg:flex">
          <div className="w-full lg:flex">
            {[0, 1, 2, 3, 5].map((event) => (
              <div className="w-full p-3  text-lpSecondary lg:w-full">
                <h4 className="text-2xl font-bold italic">22</h4>
                <p className="text-sm">Marco</p>
              </div>
            ))}
          </div>
          <div className="w-full justify-start rounded-md bg-lpSecondary lg:flex">
            {[0, 1, 2, 3, 5].map((event) => (
              <div className="w-full flex-col items-center rounded-md  text-white even:bg-lpSecondary2 lg:w-full">
                {[0, 1, 2, 3, 4].map((eventDetail) => (
                  <div className="w-full flex-col items-start border-b border-slate-800 p-3  last:border-none">
                    <p>
                      <strong>9h</strong> Evento XPTO
                    </p>
                    <small>Descricao do evento</small>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <img src="images/dots.jpg" />
          <img src="images/cohaut-logo-horizontal.svg" />
        </div>
      </div>
    </section>
  )
}

export default AgendaSection
