export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished dev
    // token: "BQBwRoEPTz2UcQp54pRCIUD8gdAojtn_S9T1H_TICedFGXUkFMPh4epjuS-ZRmXYOuzuIKPC-2Mlp5LNDtt2RapHqZylhqx2WLJ7ufM4Y6pmd5pFReZ_6FllFsECgXVH0Vtch1L2seNFf6d51HiMPhTF"
}

const reducer = (state, action) => {
    console.log({action});

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                 token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;