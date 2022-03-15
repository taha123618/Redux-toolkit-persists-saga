import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./Reducer/userReducer";
// is use to connect global store to local data store
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// redux-logger
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore(
  persistedReducer({
    reducer: userReducer,
    // middleware: Middleware,
  }),
  applyMiddleware(logger)
);

let persistor = persistStore(store);
export { store, persistor };
