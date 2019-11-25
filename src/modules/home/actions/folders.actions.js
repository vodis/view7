import { GET_FOLDER_NAME } from '../constants/folders.constants';

export const getFolderName = (folderName) => ({
    type: GET_FOLDER_NAME,
    payload: folderName,
});