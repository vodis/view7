import { combineReducers } from 'redux';
import authReducer from '../modules/auth/reducers/auth.reducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
});

export default rootReducer;