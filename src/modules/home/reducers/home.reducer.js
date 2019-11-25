const initialState = {
    url: [],
    currentFolder: "",
};

export default function homeReducer(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_SLIDESHOW_URL":
            return {
                ...state,
                url: action.payload
            };
        case "":
            return {
                ...state,
                currentFolder: action.payload
            }
        default:
            return state;
    }
} 