import { LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/auth.constants';

export const logIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email, 
            credentials.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS });
        }).catch((error) => {
            dispatch({ type: LOGIN_ERROR });
        });
    }
};