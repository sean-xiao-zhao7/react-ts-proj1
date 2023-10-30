import { createSlice } from "@reduxjs/toolkit";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: [],
};

export const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        searchStart: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.loading = true;
        },
        searchSuccess: (state, action) => {
            state.data = action.payload;
        },
        searchError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { searchStart, searchSuccess, searchError } =
    repositoriesSlice.actions;

export default repositoriesSlice.reducer;
