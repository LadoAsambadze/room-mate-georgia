import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  houseFilter: Boolean;
}

const initialState: Type = {
  houseFilter: false,
};

const houseFilterSlice = createSlice({
  name: "houseFilter",
  initialState,
  reducers: {
    setHouseFilter: (state, action: PayloadAction<Boolean>) => {
      state.houseFilter = action.payload;
    },
  },
});

export const { setHouseFilter } = houseFilterSlice.actions;

export default houseFilterSlice.reducer;
export type RootState = {
  houseFilter: ReturnType<typeof houseFilterSlice.reducer>;
};
