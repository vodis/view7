import { CREATE_FOLDER } from '../constants/folder.constants';

export const createFolder = (folder) => {
    return (dispatch, getState) => {
        dispatch({type: CREATE_FOLDER});
    } 
}