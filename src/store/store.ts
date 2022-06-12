import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import locationsSlices from "../features/locations/slices/locationsSlices";
import residentsSlices from "../features/residents/slices/residentsSlices";
export const store = configureStore({
  reducer: {
    location:locationsSlices,
    resident:residentsSlices
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
