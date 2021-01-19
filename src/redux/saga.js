import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_SPACEX_HISTORY_DATA_SUCCESS,
  FETCH_SPACEX_HISTORY_DATA_REQUEST,
  FETCH_SPACEX_HISTORY_DATA_FAILURE,
  FETCH_SPACEX_PAYLOAD_DATA_REQUEST,
  FETCH_SPACEX_PAYLOAD_DATA_SUCCESS,
  FETCH_SPACEX_PAYLOAD_DATA_FAILURE,
} from "./action";

const fetchHistoryDataUrl = () =>
  fetch("https://api.spacexdata.com/v3/history").then((res) => {
    return res.json();
  });

function* fetchHistoryData(input) {
  try {
    const historyData = yield call(fetchHistoryDataUrl);
    console.log(historyData, "saga data");
    yield put({
      type: FETCH_SPACEX_HISTORY_DATA_SUCCESS,
      payload: historyData,
    });
  } catch (error) {
    yield put({
      type: FETCH_SPACEX_HISTORY_DATA_FAILURE,
      payload: error,
    });
  }
}

const fetchPayloadDataUrl = () =>
  fetch("https://api.spacexdata.com/v3/payloads").then((res) => {
    return res.json();
  });

function* fetchPayloadData(input) {
  try {
    const payloadData = yield call(fetchPayloadDataUrl);
    console.log(payloadData, "paylaod");
    yield put({
      type: FETCH_SPACEX_PAYLOAD_DATA_SUCCESS,
      payload: payloadData,
    });
  } catch (error) {
    yield put({
      type: FETCH_SPACEX_PAYLOAD_DATA_FAILURE,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_SPACEX_HISTORY_DATA_REQUEST, fetchHistoryData);
  yield takeEvery(FETCH_SPACEX_PAYLOAD_DATA_REQUEST, fetchPayloadData);
}
