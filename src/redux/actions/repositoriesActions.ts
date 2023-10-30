import axios from "axios";
import { actionTypes } from "../reducers/repositoriesReducer";

export const searchRepositoriesAction = (term: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: actionTypes.search,
        });
    };
};
