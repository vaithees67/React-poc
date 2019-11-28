import { put, call, takeEvery } from "redux-saga/effects";

import Api from "../../API";
import { fetchFormSuccess } from "./FormActions";

export function* fetchForm() {
  try {
    const response = yield call(Api.fetchData);
    console.log('Form Saga');
    const data = response.data
    console.log(data);
    yield put(fetchFormSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export const FormSagas = [takeEvery("FETCH_FORM", fetchForm)];