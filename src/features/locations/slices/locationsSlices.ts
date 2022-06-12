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

//fetch locations by pagination num
export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (paginatioNum: number) => {
    const data = await RickAndMortyService.getLocations(paginatioNum);
    return data;
  }
);

//fetch location counts for total pagination page num
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
