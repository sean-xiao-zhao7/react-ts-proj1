export const actionTypes = {
    search: "SEARCH",
    success: "SUCCESS",
    error: "ERROR",
};

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

interface RepositoriesAction {
    type: string;
    payload?: any;
}

const repositoriesReducer = (
    state: RepositoriesState,
    action: RepositoriesAction
): RepositoriesState => {
    switch (action.type) {
        case actionTypes.search:
            return {
                loading: true,
                error: null,
                data: [],
            };
        case actionTypes.success:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case actionTypes.error:
            return {
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
};

export default repositoriesReducer;
