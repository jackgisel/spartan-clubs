const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log("Login Success");
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNED OuT');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup successful');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;