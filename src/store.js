export default{
    state: {
        isLogin: false,
        username: '',
        userID: '',
    },
    mutations: {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false;
            state.username = '';
            state.userID = ''
        },
        setUsername(state, name){
            state.username = name;
        },
        setUserID(state, id){
            state.userID = id;
        }
    }
}