import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import houseFilterSlice from "./houseFilterSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    houseFilter: houseFilterSlice,
    rangeValues: houseFilterSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
