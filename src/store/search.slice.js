import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: ""
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, actions) => {
      state.searchQuery = actions.payload
    }
  },
})

export const { setSearchQuery } = searchSlice.actions

export default searchSlice.reducer