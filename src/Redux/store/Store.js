import thunk from "redux-thunk";
import { compose } from "redux";
import rootReducers from "../reducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     persistedReducer,
//     {},
//     composeEnhancers(applyMiddleware(...middleware))
// );

const store = configureStore({
    reducer: persistedReducer,
    devTools: composeEnhancers,
    middleware: middleware
})

let persistor = persistStore(store);

export { store, persistor };