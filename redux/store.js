import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "./reducers/user.reducer";
import oeuvre_reducer from "./reducers/oeuvre.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user_reducer,
    oeuvre_reducer

  },
  middleware: [logger, thunk],
});

export default store;
