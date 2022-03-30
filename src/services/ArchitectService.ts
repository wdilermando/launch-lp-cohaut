import { Api } from '../providers'

const getAll = () => Api.get('/arquitetos?populate=*')

export const ArchitectService = {
  getAll,
}
