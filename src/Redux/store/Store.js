import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers";
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
);

let persistor = persistStore(store);

export { store, persistor };