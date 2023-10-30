interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const repositoriesReducer = (state: RepositoriesState, action: any) => {};

export default repositoriesReducer;
