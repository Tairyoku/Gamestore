import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
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
import storage from "redux-persist/lib/storage";
import rootReducer from './rootReduser'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'cart',
        'games'
    ]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
export default store
export const persistor = persistStore(store)