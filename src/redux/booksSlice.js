import { createSlice } from "@reduxjs/toolkit";
import studentBooks from "../data/booksData.js"; // dummy data


const booksSlice = createSlice({
  name: "books",
  initialState: { books: studentBooks },
  reducers: {
    addBook: (state, action) => {
    
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
