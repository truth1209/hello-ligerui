import { combineReducers } from 'redux'
import costOrder from './costOrderReducer'


const rootReducer = combineReducers({
  costOrder:costOrder
})

export default rootReducer