import {HOME, SERVICE_HISTORY} from '../../config/apis/endpoint';
import {axiosInstance} from '../core/axiosInstance';
import {ACTION_CONSTANTS} from './util/Contants';

export const getuser = () => {
  return {
    type: ACTION_CONSTANTS.GET_USER,
    payload: axiosInstance.get(HOME),
  };
};

export const getServiceHistory = (userId, buildingId, days) => {
  if (!days) {
    days = 90; //default
  }
  const body = {
    user_id: userId,
    building_id: buildingId,
    days: days,
  };
  return {
    type: ACTION_CONSTANTS.GET_SERVICE_HISTORY,
    payload: axiosInstance.post(SERVICE_HISTORY, body),
  };
};

export const changeBuilding = building => {
  return {
    type: ACTION_CONSTANTS.CHANGE_BUILDING,
    meta: building,
  };
};
