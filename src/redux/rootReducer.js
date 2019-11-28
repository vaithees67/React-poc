import { combineReducers } from 'redux'
import formReducer from './form/FormReducer'

const rootReducer = combineReducers({
  form: formReducer
})

export default rootReducer