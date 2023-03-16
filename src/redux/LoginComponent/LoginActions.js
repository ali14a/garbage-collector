import { axios } from '../core/axiosInstance';
import { ACTION_CONSTANTS } from './util/Contants';
export const getData = () => {
  const url = ``
  return {
    type: ACTION_CONSTANTS.GET_DUMMY,
    payload: axios.get(url)
  }
}