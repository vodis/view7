export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {debugger
        // dispatch({ type: 'LOGIN_SUCCESS'})
        const firestore = getFirestore;
        firestore.collection('gallery').add({
            authorFirstName: 'Guest'
        })
        dispatch({ type: 'ACTION'})
    }
};