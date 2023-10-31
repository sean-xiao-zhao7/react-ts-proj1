import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "../index";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
    searchTerm: string;
}

const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: [],
    searchTerm: "",
};

export const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        searchStart: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.loading = true;
            state.searchTerm = action.payload;
        },
        searchSuccess: (state, action: PayloadAction<string[]>) => {
            state.data = action.payload;
            state.searchTerm = "";
        },
        searchError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { searchStart, searchSuccess, searchError } =
    repositoriesSlice.actions;

// Define a thunk that dispatches those action creators
const searchStartAction =
    (searchTerm: string) => async (dispatch: AppDispatch) => {
        dispatch(searchStart(searchTerm));
    };

export default repositoriesSlice.reducer;
