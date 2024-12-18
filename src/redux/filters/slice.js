import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
  },
  reducers: {
    setSearchFilter(state, action) {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
});
export const { setSearchFilter } = slice.actions;

export default slice.reducer;
