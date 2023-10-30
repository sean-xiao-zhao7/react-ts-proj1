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

const repositoriesReducer = (state: RepositoriesState, action: any) => {
    switch (action.type) {
        case actionTypes.search:
        case actionTypes.success:
        case actionTypes.error:
        default:
            return state;
    }
};

export default repositoriesReducer;
