import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter.slice'
import searchSlice from './search.slice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    search: searchSlice
  },
})