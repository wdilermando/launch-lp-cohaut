import { Api } from '../providers'

const getAll = () => Api.get('/arquitetos?populate=*&sort=createdAt')

export const ArchitectService = {
  getAll,
}
