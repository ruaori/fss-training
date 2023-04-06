

export const loginAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            data
        });
        localStorage.setItem("userData", JSON.stringify(data));
    };
}

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: 'logout',
        })
        localStorage.removeItem("userData");
    }
}
