import {
  FETCH_SPACEX_HISTORY_DATA_SUCCESS,
  FETCH_SPACEX_HISTORY_DATA_REQUEST,
  FETCH_SPACEX_HISTORY_DATA_FAILURE,
  FETCH_SPACEX_PAYLOAD_DATA_REQUEST,
  FETCH_SPACEX_PAYLOAD_DATA_SUCCESS,
  FETCH_SPACEX_PAYLOAD_DATA_FAILURE,
} from "./action";

const initialState = {
  showLoader: false,
  historyData: [],
  payloadData: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case FETCH_SPACEX_HISTORY_DATA_REQUEST:
      return {
        ...state,
        showLoader: true,
        historyData: null,
        type: action.type,
      };
    case FETCH_SPACEX_HISTORY_DATA_SUCCESS:
      return {
        ...state,
        showLoader: false,
        historyData: action.payload,
        type: action.type,
      };
    case FETCH_SPACEX_HISTORY_DATA_FAILURE:
      return {
        ...state,
        showLoader: false,
        historyData: action.payload,
        type: action.type,
      };
    case FETCH_SPACEX_PAYLOAD_DATA_REQUEST:
      return {
        ...state,
        showLoader: true,
        payloadData: null,
        type: action.type,
      };
    case FETCH_SPACEX_PAYLOAD_DATA_SUCCESS:
      return {
        ...state,
        showLoader: false,
        payloadData: action.payload,
        type: action.type,
      };
    case FETCH_SPACEX_PAYLOAD_DATA_FAILURE:
      return {
        ...state,
        showLoader: false,
        payloadData: action.payload,
        type: action.type,
      };
    default:
      return newState;
  }
};

export default reducer;
