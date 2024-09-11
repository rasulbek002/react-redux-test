// src/features/counter/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
});

const postsSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
    isSucess: false,
    posts: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

// Export actions for dispatching them in components
export const { increment, decrement, incrementByAmount } = postsSlice.actions;

// Export the reducer to use it in the store
export default postsSlice.reducer;
