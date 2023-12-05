import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  houseFilter: Boolean;
  rangeValues: any; // Add this line
}

const initialState: Type = {
  houseFilter: false,
  rangeValues: {}, // Add this line
};

const houseFilterSlice = createSlice({
  name: "houseFilter",
  initialState,
  reducers: {
    setHouseFilter: (state, action: PayloadAction<Boolean>) => {
      state.houseFilter = action.payload;
    },
    setRangeValuesRedux: (state, action: PayloadAction<any>) => {
      // Add this reducer
      state.rangeValues = action.payload;
    },
  },
});

export const { setHouseFilter, setRangeValuesRedux } = houseFilterSlice.actions; // Export the new action

export default houseFilterSlice.reducer;
export type RootState = {
  houseFilter: ReturnType<typeof houseFilterSlice.reducer>;
};
