import React, { Component } from 'react'
import {connect} from 'react-redux'
import { signUp } from '../../store/actions/AuthAction'

import { Redirect } from 'react-router-dom'

class SignIn extends Component {
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
        this.props.signUp(this.state);
        console.log(this.state)
    
    }
    render() {
        const { auth, authError} = this.props;
        console.log(authError)
        if(auth.uid) return <Redirect to = '/' />
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
                <div className = "red-text center"> { authError ? <p>{ authError } </p>:null}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state,"heiii")
    return {
        auth:state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
