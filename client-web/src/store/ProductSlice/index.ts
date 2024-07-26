import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { FetchSushi } from "../../type";
import { BASE_URL } from "../../confects";

export type TypeParams = {
  item: FetchSushi;
};

export type TypeFetchDish = {
  limit: number;
  search: string;
  category: number;
};

const initialState: TypeParams & TypeFetchDish = {
  limit: 6,
  search: "",
  category: 1,
  item: {
    dish: [],
    pages: {
      allPages: 1,
      page: 1,
    },
  },
};

export const fetchDish = createAsyncThunk("Dish/fetchDishStatus", async (params: TypeFetchDish) => {
  const { limit, search, category } = params;
  const searchParams = search !== "" ? `&search=${search}` : "";
  const { data } = await axios.get<FetchSushi>(
    `${BASE_URL}/catalog?category=${category}&page=2&limit=${limit}${searchParams}`,
  );
  return data;
});

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    searchDish: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    pageDish: (state, action: PayloadAction<number>) => {
      state.item.pages.page = action.payload;
    },
    limitDish: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    categoryDish: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fulfilled выполнено
    builder
      .addCase(fetchDish.fulfilled, (state, action: PayloadAction<FetchSushi>) => {
        state.item = action.payload;
      }) // pending в ожидании
      .addCase(fetchDish.pending, (state) => {
        state.item.dish = [];
        state.item.pages = { allPages: 1, page: 1 };
      }) // rejected отклоненный
      .addCase(fetchDish.rejected, (state) => {
        state.item.dish = [];
        state.item.pages = { allPages: 1, page: 1 };
      });
  },
});

export const { searchDish, pageDish, limitDish, categoryDish } = dishSlice.actions;

export default dishSlice.reducer;
