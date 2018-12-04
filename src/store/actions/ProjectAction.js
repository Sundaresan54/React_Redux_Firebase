  const createProject = (project) => {
    return (dispatch,getState,{ getFirebase , getFirestore }) => { 
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project});
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err});
        })

        
    }
};

export default createProject;