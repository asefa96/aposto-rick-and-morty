import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../store/store";
import RickAndMortyService from "../../../services/RickAndMorty.service";
import { ILocation, LocationResults } from "../types";

export interface LocationState {
  value?: Array<LocationResults>;
  status: "idle" | "loading" | "failed";
}

const initialState: LocationState = {
  value: undefined,
  status: "idle",
};

// The function below is called a th"unk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (paginatioNum: number) => {
    const data = await RickAndMortyService.getLocations(paginatioNum);
    return data;
  }
);

export const fetchLocationsCount = createAsyncThunk(
  "locations/fetchLocationsCount",
  async () => {
    const {info}= await RickAndMortyService.getLocationsInfo()
    return info.count
  }
);

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchLocations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.location.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default locationsSlice.reducer;