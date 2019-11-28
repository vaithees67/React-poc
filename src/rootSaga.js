import { all } from "redux-saga/effects";
import { FormSagas } from "./redux/form/FormSaga";

export default function* rootSaga() {
  yield all([...FormSagas]);
}