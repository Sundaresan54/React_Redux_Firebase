import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'



class Dashbord extends Component {
    render() {
       
        const { projects, auth, notification} = this.props;
       
        if(!auth.uid) return < Redirect to = '/signIn'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }



}
const mapStateToProps =(state) => {
  
    return {
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
       

    }
}


export default compose(
    connect(mapStateToProps,null),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'notifications'} 
    ])
)(Dashbord)