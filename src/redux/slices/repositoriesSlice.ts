import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "../index";
import axios from "axios";
import { bu } from "../../a";

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
            state.loading = false;
            state.searchTerm = "";
        },
        searchError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
const { searchStart, searchSuccess, searchError } = repositoriesSlice.actions;

// Define a thunk that dispatches those action creators
export const searchStartAction =
    (searchTerm: string) => async (dispatch: AppDispatch) => {
        if (!searchTerm) {
            dispatch(searchError("No search term."));
        } else {
            dispatch(searchStart(searchTerm));
            try {
                const result = await axios.get(bu, {
                    params: {
                        text: searchTerm,
                    },
                });
                dispatch(searchSuccess(result.data.objects));
            } catch (err: any) {
                dispatch(searchError(err.message));
            }
        }
    };

export const searchErrorAction =
    (error: string) => async (dispatch: AppDispatch) => {
        dispatch(searchError(error));
    };

// // Other code such as selectors can use the imported `RootState` type
// export const repoData = (state: RootState) => state.repositories.data;
// export const repoError = (state: RootState) => state.repositories.error;
// export const repoLoading = (state: RootState) => state.repositories.loading;

export default repositoriesSlice.reducer;
