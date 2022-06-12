import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../store/store";
import RickAndMortyService from "../../../services/RickAndMorty.service";
import { ILocation, LocationResults } from "../types";
import { useAppCtx } from "../../../context/AppContext/hooks";
import { ActionTypes } from "../../../context/AppContext/types";

export interface LocationState {
  value?: Array<LocationResults>;
  status: "idle" | "loading" | "failed";
}

const initialState: LocationState = {
  value: undefined,
  status: "idle",
};

//fetch locations by pagination num
export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (paginatioNum: number) => {
    try {
      const data = await RickAndMortyService.getLocations(paginatioNum);
      return data;
    } catch (error) {
      alert("Fetch locations error: " + error);
    }
  }
);

//fetch location counts for total pagination page num
export const fetchLocationsCount = createAsyncThunk(
  "locations/fetchLocationsCount",
  async () => {
    try {
      const { info } = await RickAndMortyService.getLocationsInfo();
      return info.count;
    } catch (error) {
      alert("Fetch locations count error: " + error);
    }
  }
);

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
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

export const selectCount = (state: RootState) => state.location.value;

export default locationsSlice.reducer;
