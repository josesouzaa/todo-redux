import { configureStore, combineReducers } from '@reduxjs/toolkit'
import tasks from './tasks'

const middleware = (getDefaultMiddleware) => getDefaultMiddleware()

const reducer = combineReducers({ tasks })
const store = configureStore({ reducer, middleware })

export default store
