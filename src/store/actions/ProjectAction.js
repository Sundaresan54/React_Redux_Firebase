  const createProject = (project) => {
    return (dispatch,getState,{ getFirebase , getFirestore }) => { 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:"Abbay",
            authorLastName:"abc",
            authorId:123,
            createAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project});
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err});
        })

        
    }
};

export default createProject;