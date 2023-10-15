import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genresTemp: [],
  genres: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectGenre: (state, actions) => {
        if (state.genresTemp.some( genre => genre === actions.payload ))
        {
            state.genresTemp = state.genresTemp.filter( genre => genre !== actions.payload)
        }
        else{
            state.genresTemp.push(actions.payload)
        }
    },
    showSelectedGenres: (state) => {
      state.genres = state.genresTemp
    }
  },
})

export const { selectGenre, showSelectedGenres } = filterSlice.actions

export default filterSlice.reducer