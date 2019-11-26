import { GET_FOLDER_NAME, SET_CURRENT_IMAGE_LIST } from '../constants/folders.constants';

export const getFolderName = (folderName) => ({
    type: GET_FOLDER_NAME,
    payload: folderName,
});

export const setCurrentImageList = (array = []) => ({
    type: SET_CURRENT_IMAGE_LIST,
    payload: array,
});