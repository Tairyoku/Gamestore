import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/redusers'
import gamesReducer from './games/redusers'
import storage from "redux-persist/lib/storage";
import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
  
    const persistConfig = {
        key: 'root',
        version: 1,
        storage,
        // whitelist: [
        //     'cart',
        //     'games'
        // ]
    }
    
    const rootReducer = combineReducers({
        cart: cartReducer,
        games: gamesReducer,
    })
    
    const persistedReducer = persistReducer(persistConfig, rootReducer)

export function setupStore() {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    })
}



export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']

export default rootReducer