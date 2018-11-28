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
        default :
      return state;
    }
}

export default authReducer;