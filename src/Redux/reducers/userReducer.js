

const intialState = {
    isLoggedIn: false,
    userData: null
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoggedIn: true,
                userData: action.data.user,
            };
            break;
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userData: null,
            }
        default:
            return state
            break;
    }
}

export default userReducer