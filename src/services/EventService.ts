import { Api } from '../providers'

const getAll = () => Api.get('/programacoes?populate=*')

export const EventService = {
  getAll,
}
