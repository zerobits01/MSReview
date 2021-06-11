const AuthContextReducer = (state, action) => {
    switch (action.type) {
        case "login":
            let data = { ...state, isAuthenticated: action.isAuthenticated, user: action.user };
            console.log(data);
            return data;
            // return setTimeout(() => {}, 2000);
        case "logout":
            return { ...state, isAuthenticated: false, user: {}};
        default:
            return { ...state };
    }
};

export default AuthContextReducer;
