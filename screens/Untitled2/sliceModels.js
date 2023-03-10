import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import constants from "../constants";
import { api } from "./api";
const FAQ_LIST = "FAQ_LIST";
export const faqList = createAsyncThunk(FAQ_LIST, async param => {
  const response = await api.faqList(param.baseUrl, param.page);
  return response.data;
});
const initialState = {
  faq: {},
  api: {
    loading: constants.LOADING_IDLE,
    error: null
  }
};
export const slice = createSlice({
  name: "faq",
  initialState: initialState,
  reducers: {
    api_v1_signup_create: (state, action) => {
      const faq = { ...state.faq
      };
      const list = [...faq?.results];
      const index = state?.faq?.results?.findIndex(i => i.id === action.payload);

      if (index >= 0) {
        const item = list[index];
        item.isExpanded = !list[index].isExpanded;
        list[index] = item;
      }

      faq.results = list;
      state.faq = faq;
    },

    api_v1_login_create(state, action) {}

  },
  extraReducers: {
    [faqList.pending]: state => {
      if (state.api.loading === constants.LOADING_IDLE) {
        state.api.loading = constants.LOADING_PENDING;
        state.api.error = null;
      }
    },
    [faqList.fulfilled]: (state, action) => {
      if (state.api.loading === constants.LOADING_PENDING) {
        // adding the previous FAQ list for pagination purpose
        if (action.payload?.previous) {
          action.payload.results = [...state.faq.results, ...action.payload.results];
        } // adding new property with name isExpanded for each FAQ.
        // The value will be set acc. to the backend configuration


        action.payload.results.forEach(element => {
          element[constants.IS_EXPANDED] = action.payload?.isExpanded ?? false;
        });
        state.faq = action.payload;
        state.api.loading = constants.LOADING_IDLE;
      }
    },
    [faqList.rejected]: (state, action) => {
      if (state.api.loading === constants.LOADING_PENDING) {
        state.api.error = action.error;
        state.api.loading = constants.LOADING_IDLE;
      }
    }
  }
});
const otherSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    rest_auth_registration_create() {}

  },
  extraReducers: builder => {
    builder.addCase(incrementBy, (state, action) => {// action is inferred correctly here if using TS
    }) // You can chain calls, or have separate `builder.addCase()` lines each time
    .addCase(decrement, (state, action) => {}) // You can match a range of action types
    .addMatcher(isRejectedAction, // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
    (state, action) => {}) // and provide a default case if no other handlers matched
    .addDefaultCase((state, action) => {});
  }
});