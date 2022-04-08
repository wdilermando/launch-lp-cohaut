import { Api } from '../providers'

const createBooking = (data: any) => Api.post('/agendamentos', data)

export const BookingService = {
  createBooking,
}
