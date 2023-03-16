import axios from 'axios'
import { BASE_URL } from '../../config/env/config';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})