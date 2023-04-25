import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./Slices/userSlice";
import postSlice from "./Slices/postSlice";
import thunk from "redux-thunk";
import commentSlice from "./Slices/commentSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({

  user: userSlice,
  postList: postSlice,
  comments:commentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware:[thunk]
});

export const persistor = persistStore(store);
