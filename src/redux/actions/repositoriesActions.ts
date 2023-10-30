import axios from "axios";

import { actionTypes } from "../reducers/repositoriesReducer";
import { bu } from "../../a";

export const searchRepositoriesAction = (term: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: actionTypes.search,
        });

        try {
            const result = await axios.get(bu, {
                params: {
                    text: term,
                },
            });
            console.log(result.data);
        } catch (err: any) {
            dispatch({
                type: actionTypes.error,
                payload: err.message,
            });
        }
    };
};
