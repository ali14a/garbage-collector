import {CONSTANT_TYPES} from '../utils/ActionConstants';
import {ACTION_CONSTANTS, GET_SERVICE_HISTORY, GET_USER} from './util/Contants';
const initialState = {
  getuser: {
    pending: false,
    error: false,
    errorMsg: '',
    success: false,
  },
  getServiceHistory: {
    pending: false,
    error: false,
    errorMsg: '',
    success: false,
  },
  user: [],
  // addressArr: [],
  buildingArr: [],
  selectedBuilding: {},
  serviceHistory: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER(CONSTANT_TYPES.PENDING): {
      return {
        ...state,
        getuser: {
          ...state.getuser,
          pending: true,
        },
      };
    }
    case GET_USER(CONSTANT_TYPES.REJECTED): {
      return {
        ...state,
        getuser: {
          ...state.getuser,
          pending: false,
          error: true,
          errorMsg: action.payload.response.data.message,
        },
      };
    }
    case GET_USER(CONSTANT_TYPES.FULFILLED): {
      const userBuildings = action.payload.data.user_associated_building;
      // let addressArr = [];
      let buildingArr = [];
      userBuildings.forEach(building => {
        buildingArr.push(building.building);
        // addressArr.push(building.building.address);
      });

      return {
        ...state,
        getuser: {
          ...state.getuser,
          pending: false,
          success: true,
        },
        user: action.payload.data,
        // addressArr: addressArr,
        buildingArr: buildingArr,
        selectedBuilding: buildingArr?.[0] || {},
      };
    }
    case ACTION_CONSTANTS.GET_USER_RESET_ERROR: {
      return {
        ...state,
        getuser: {
          ...state.getuser,
          error: false,
          errorMsg: '',
        },
      };
    }
    case ACTION_CONSTANTS.GET_USER_RESET_SUCCESS: {
      return {
        ...state,
        getuser: {
          ...state.getuser,
          success: false,
        },
      };
    }
    case GET_SERVICE_HISTORY(CONSTANT_TYPES.PENDING): {
      return {
        ...state,
        getServiceHistory: {
          ...state.getServiceHistory,
          pending: true,
        },
      };
    }
    case GET_SERVICE_HISTORY(CONSTANT_TYPES.REJECTED): {
      return {
        ...state,
        getServiceHistory: {
          ...state.getServiceHistory,
          pending: false,
          error: true,
          errorMsg: '',
        },
      };
    }
    case GET_SERVICE_HISTORY(CONSTANT_TYPES.FULFILLED): {
      return {
        ...state,
        getServiceHistory: {
          ...state.getServiceHistory,
          pending: false,
          success: true,
        },
        serviceHistory: action.payload.data,
      };
    }
    case ACTION_CONSTANTS.GET_SERVICE_HISTORY_RESET_ERROR: {
      return {
        ...state,
        getServiceHistory: {
          ...state.getServiceHistory,
          error: false,
          errorMsg: '',
        },
      };
    }
    case ACTION_CONSTANTS.GET_SERVICE_HISTORY_RESET_SUCCESS: {
      return {
        ...state,
        getServiceHistory: {
          ...state.getServiceHistory,
          success: false,
        },
      };
    }
    case ACTION_CONSTANTS.CHANGE_BUILDING: {
      console.log(action);
      return {
        ...state,
        selectedBuilding: action.meta,
      };
    }
    default:
      return state;
  }
}
