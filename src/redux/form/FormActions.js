import { FETCH_FORM_SUCCEEDED, FORM_DATA } from "./FormActionTypes";

export const fetchFormSuccess = data => ({
  type: FETCH_FORM_SUCCEEDED,
  data
});

export const formSubmit = data => ({
  type: FORM_DATA,
  data
})