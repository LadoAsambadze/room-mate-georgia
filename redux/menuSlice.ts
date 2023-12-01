import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  menu: Boolean;
}

const initialState: Type = {
  menu: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<Boolean>) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
export type RootState = {
  menu: ReturnType<typeof menuSlice.reducer>;
};
