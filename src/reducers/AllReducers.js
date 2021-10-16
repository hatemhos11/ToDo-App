import {combineReducers} from 'redux'
import TodosReducer from './TodosReducer'
import CatReducer from './CatReducer'

const AllReducers = combineReducers({
  TodosReducer,
  CatReducer
})
export default AllReducers