const initialState = {
    url: [],
    currentFolder: "",
    currentImageList: [],
};

export default function homeReducer(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_SLIDESHOW_URL":
            return {
                ...state,
                url: action.payload
            };
        case "GET_FOLDER_NAME":
            return {
                ...state,
                currentFolder: action.payload
            }
        case "SET_CURRENT_IMAGE_LIST":
            return {
                ...state,
                currentImageList: action.payload
            }
        default:
            return state;
    }
} 