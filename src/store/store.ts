import { configureStore } from "@reduxjs/toolkit";
import { navbarSlice } from "./slices/navbarSlice";
import { shipmentSLice } from "./slices/shipmentSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
    shipment: shipmentSLice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
