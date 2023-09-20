import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "auth",
  key:"refreshToken",
  storage: storage,
  whitelist: ["auth"],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };