import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/AuthAction'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.signin(this.state);
        
    }
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSumbit} className="white">
                    <h5 className="grey-text-darken-3">SignIn</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <button className="btn green lighten-1 z-depth-0">Login</button>
                </form>
                <div className = "red-text center"> {authError ? <p>{authError} </p>:null}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credential) => dispatch(signIn(credential))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
