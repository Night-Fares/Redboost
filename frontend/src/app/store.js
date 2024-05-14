import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import loginSliceReducer from './features/login/loginSlice'
import registerSliceReducer from './features/register/registerSlice'
import appReducer from './features/appSlice/appSlice'
import userDataReducer from './features/userData/userData'
import eventsReducer from './features/events/events'
import programsSliceReducer from './features/programs/programsSlice'
import entrepreneursReducer from './features/entrepreneursData/entrepreneursSlice'
import activityReducer from './features/activity/activitySlice'
import usersReducer from './features/users/usersSlice'
import taskReducer from './features/task/taskSlice'
import routeReducer from './features/routeSlice/routeSlice'
import authReducer from './features/auth/authSlice' // Add this

// You may need to use combineReducers if you have multiple reducers
const rootReducer = combineReducers({
  app: appReducer,
  loginSlice: loginSliceReducer,
  registerSlice: registerSliceReducer,
  programsSlice: programsSliceReducer,
  userData: userDataReducer,
  events: eventsReducer,
  entrepreneurs: entrepreneursReducer,
  activity: activityReducer,
  usersSlice: usersReducer,
  task: taskReducer,
  route: routeReducer,
  auth: authReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // You can add more reducers here that you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor }
