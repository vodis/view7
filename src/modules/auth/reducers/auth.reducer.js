const initialState = {
    authError: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: 'SignUp failed',
            };
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null,
            };
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed',
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