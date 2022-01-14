import todoReducer from './todoreducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todoReducer : todoReducer
})

export default rootReducer