import { FETCH_FORM_SUCCEEDED, FORM_DATA } from "./FormActionTypes";

const initalstate = {
  fields: [],
  values: {}
}

function formReducer(state = initalstate, action) {
  switch (action.type) {
    case FETCH_FORM_SUCCEEDED: {
      console.log(...action.data)
      return {
        ...state,
        fields: [...action.data]
      };
    }
    case FORM_DATA: {
      // console.log("action.data------")
      // console.log(action.data)
      return {
        ...state,
        values: { ...action.data }
      };
    }
    default:
      return state;
  }
}

export default formReducer;