import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Type {
 houseId: string | null
}

const initialState: Type = {
 houseId: null,
}

const houseIdSlice = createSlice({
 name: 'houseI',
 initialState,
 reducers: {
  setHouseId: (state, action: PayloadAction<string>) => {
   state.houseId = action.payload
  },
 },
})

export default houseIdSlice.reducer
export const { setHouseId } = houseIdSlice.actions
export type RootState = { houseId: ReturnType<typeof houseIdSlice.reducer> }
