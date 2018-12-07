export const signIn =  (credentials) => {
    return (dispatch,getState, { getFirebase }) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( ()=> {
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err) => {
            dispatch({type:"LOGIN_ERR",err})
        } )
    }

    
}


export const signOut = () => {
    return (dispatch,getState, { getFirebase })=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then (()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        });
    }
}


export const signUp = (newUser) => {
    return (dispatch,getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( (res)=> {
            console.log(res,"response");
                return firestore.collection('user').doc(res.user.uid).set({
                    firstName:newUser.firstName,
                    lastName: newUser.lastName,
                    initial: newUser.firstName[0] + newUser.lastName[0]
                }).then(()=>{
                    dispatch({type:"SIGNUP_SUCCESS"})
                })
        }).catch( (err) => {
            console.log(err,"qwerty");
            dispatch({type:"SIGNUP_ERR",err})
        })
    }

}