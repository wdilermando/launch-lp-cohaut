import { Api } from '../providers'

const getAll = () => Api.get('/empreendimentos?populate=*&sort=listingId')

export const ListingService = {
  getAll,
}
