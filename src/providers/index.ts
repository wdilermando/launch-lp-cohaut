import axios from 'axios'
import { host } from '../utils/constants'

export const Api = axios.create({
  baseURL: `https://cohaut-admin.herokuapp.com/api`,
})
