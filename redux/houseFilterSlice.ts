import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Type {
 houseFilter: Boolean
 rangeValues: Record<string, string | number> // Add this line
 selectedValues: Record<string, string | number> // Ad this line
}

const initialState: Type = {
 houseFilter: false,
 rangeValues: {},
 selectedValues: {}, // Add this line
}

const houseFilterSlice = createSlice({
 name: 'houseFilter',
 initialState,
 reducers: {
  setHouseFilter: (state, action: PayloadAction<Boolean>) => {
   state.houseFilter = action.payload
  },
  setRangeValuesRedux: (state, action: PayloadAction<any>) => {
   state.rangeValues = action.payload
  },
  setSelectedValuesRedux: (state, action: PayloadAction<any>) => {
   state.selectedValues = action.payload
  },
 },
})

export const { setHouseFilter, setRangeValuesRedux, setSelectedValuesRedux } =
 houseFilterSlice.actions // Export the new action

export default houseFilterSlice.reducer
export type RootState = {
 houseFilter: ReturnType<typeof houseFilterSlice.reducer>
}
