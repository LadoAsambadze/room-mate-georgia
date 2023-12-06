import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import houseFilterSlice from './houseFilterSlice'
import houseIdSlice from './houseIdSlice'

const store = configureStore({
 reducer: {
  menu: menuSlice,
  houseFilter: houseFilterSlice,
  rangeValues: houseFilterSlice,
  houseId: houseIdSlice,
 },
})
export type RootState = ReturnType<typeof store.getState>

export default store
