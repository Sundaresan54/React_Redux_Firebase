import React, { Component } from 'react'
import {connect} from 'react-redux';
import createProject from '../../store/actions/ProjectAction'

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        
        this.setState({
            title:"",
            conent:""
        })
        console.log(this.state.title);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSumbit} className="white">
                    <h5 className="grey-text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <button className="btn blue lighten-1 z-depth-0">CreateProject</button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => { 
    return{
        createProject: (project) => dispatch(createProject(project))
    }
} 

export default connect(null,mapDispatchToProps)(CreateProject);
