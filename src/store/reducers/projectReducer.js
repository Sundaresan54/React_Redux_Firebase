

const initState = {
projects: [
//    {id:'1', title:'Help ',content:"how to solve this "},
//    {id:'2', title:'Help ',content:"how to solve this "},
//    {id:'3', title:'Help ',content:"how to solve this "}
]
}

const projectReducer = (state=initState,action) => {
    switch(action.type){
        case "CREATE_PROJECT" :
        console.log("project created",action.project);
        return state;
        
        case "CREATE_PROJECT_ERROR" :
        console.log("project not created",action.err);
        return state;

        default : 
        return state;


    }
    
}

export default projectReducer;