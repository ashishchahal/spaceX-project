export const FETCH_SPACEX_HISTORY_DATA_REQUEST =
  "FETCH_SPACEX_HISTORY_DATA_REQUEST";
export const FETCH_SPACEX_HISTORY_DATA_SUCCESS =
  "FETCH_SPACEX_HISTORY_DATA_SUCCESS";
export const FETCH_SPACEX_HISTORY_DATA_FAILURE =
  "FETCH_SPACEX_HISTORY_DATA_FAILURE";

export const getSpacexHistoryData = (inputData) => ({
  type: FETCH_SPACEX_HISTORY_DATA_REQUEST,
  payload: inputData,
});

export const FETCH_SPACEX_PAYLOAD_DATA_REQUEST =
  "FETCH_SPACEX_PAYLOAD_DATA_REQUEST";
export const FETCH_SPACEX_PAYLOAD_DATA_SUCCESS =
  "FETCH_SPACEX_PAYLOAD_DATA_SUCCESS";
export const FETCH_SPACEX_PAYLOAD_DATA_FAILURE =
  "FETCH_SPACEX_PAYLOAD_DATA_FAILURE";

export const getSpacexPayloadData = (inputData) => ({
  type: FETCH_SPACEX_PAYLOAD_DATA_REQUEST,
  payload: inputData,
});
