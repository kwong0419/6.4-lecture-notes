<<<<<<< HEAD
import reducer from "../reducers/rootReducer";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
=======
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import fruits from "../features/fruitStand/fruitStandSlice";
import farmers from "../features/farmers/farmersSlice";

const reducer = {
  fruits,
  farmers,
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer, 
    middleware
});


>>>>>>> 9370794cc346adc19fd6d32023933d19008f8a56
