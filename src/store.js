import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerReducer,
  },
});

export default store;
