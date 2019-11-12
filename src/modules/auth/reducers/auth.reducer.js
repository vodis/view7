const initialState = {
    authError: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGNUP_ERROR':
            console.log('Error: ' + action.error.message);
            return {
                ...state,
                authError: action.error.message,
            };
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null,
            };
        case 'LOGIN_ERROR':
            console.log('Error: ' + action.error.message);
            return {
                ...state,
                authError: action.error.message,
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        default: 
        return state;
    }
}