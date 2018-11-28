import React, { Component } from 'react'

class Signin extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
    
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSumbit} className="white">
                    <h5 className="grey-text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <button className="btn green lighten-1 z-depth-0">Login</button>
                </form>

            </div>
        )
    }
}

export default Signin
