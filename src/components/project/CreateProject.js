import React, { Component } from 'react'

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
        console.log(this.state,"baby");
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSumbit} className="white">
                    <h5 className="grey-text-darken-3">SignIn</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="mateialize-textarea" onChange={this.handleChange} />
                    </div>
                    <button className="btn blue lighten-1 z-depth-0">CreateProject</button>
                </form>

            </div>
        )
    }
}

export default CreateProject;
