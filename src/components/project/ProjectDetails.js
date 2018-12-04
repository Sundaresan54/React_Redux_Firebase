import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    console.log(props,"qwerty123");
    // const id = props.match.params.id;
    const { project, auth } = props;
   
    if(!auth.uid) return <Redirect to = '/signIn'/>
    if(project) {
        return(
<div className="container project-details">
        <div className="card z-depth-0 ">
        <div className="card-content ">
            <span className="card-title">
            {project.title}
            </span>
            <div className="card-action grey-text">
            {project.content}
            <div><p>{project.authorFirstName} {project.authorLastName}</p></div>
            </div>  
        </div>
    </div>
    </div>
        )
    }
        
    else {
        return (
            <div className= "container center" > 
           <p> Project Loading..</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]:null
    return {
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'projects'
        }
    ])
) (ProjectDetails);