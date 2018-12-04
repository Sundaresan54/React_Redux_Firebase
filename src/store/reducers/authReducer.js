const initState = {
authError :null
}

const authReducer = (state=initState,action) => {
    switch(action.type){
        case"LOGIN_ERR":
        console.log("login failed") 
        return {
            ...state,
            authError:"Login failed"
        }
        case"LOGIN_SUCCESS":
        return {
            ...state,
            authError:"login success"
        }
        case "LOGOUT_SUCCESS":
        console.log("logout success");
        return state;
        case "SIGNUP_SUCCESS":
        console.log("SIGNUP success");
        return {
            ...state,
            authError:null
        }
        case "SIGNUP_ERR": 
        console.log("signUp failure",action.err.message);
        return {
            ...state,
            authError : action.err.message
        }
        default :
      return state;
    }
}

export default authReducer;