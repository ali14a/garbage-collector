import {ACTION_CONSTANTS} from './util/Contants';
const initialState = {
  pending: false,
  success: false,
  error: false,
  errorMsg: '',
  token:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4IiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn0seyJhdXRob3JpdHkiOiJ1c2VyOndyaXRlIn0seyJhdXRob3JpdHkiOiJ2ZWhpY2xlOndyaXRlIn0seyJhdXRob3JpdHkiOiJ2ZWhpY2xlOnJlYWQifV0sImlhdCI6MTYyNDkyNDgwMCwiZXhwIjoxNjI2NzM5MjAwLCJpc3MiOiJUcmliZSJ9._rx_beZmLasybFYo1OBgzFuk12PT5kCsbnm5nZ_YHRN5YN3t0c4rMalz6AfGclRT_KxO1JTogG7vZgtpTOVp0Q',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_CONSTANTS.GET_DUMMY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
