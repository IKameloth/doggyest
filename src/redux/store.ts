import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import exampleSlice from "./slices/exampleSlice";

const persistConfig = {
  key: 'example-persist-slice',
  storage
  // whitelist: ['auth']
  // blacklist: []
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    // auth: authSlice,
    example: exampleSlice
  })
)

const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
