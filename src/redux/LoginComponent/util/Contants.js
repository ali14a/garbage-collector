import { getCorrectConstant } from '../../utils/ActionConstants';

export const ACTION_CONSTANTS = {
  GET_DUMMY: 'GET_DUMMY'
};
export const GET_DUMMY = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.GET_DUMMY, type);
};
