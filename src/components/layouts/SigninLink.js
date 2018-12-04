import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/AuthAction'

const SigninLink = (props) => {

    return (
        <ul className="right">
        <li><NavLink to = '/createproject' >New Project</NavLink> </li>
        <li><a onClick={props.signOut} >Log out</a> </li>
        <li><NavLink to = '/' className='btn btn-floating green lighten-1 '>SP</NavLink> </li>
        </ul>
    )
}

    const mapStateToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut())
        }
    }

export default connect(null,mapStateToProps)(SigninLink);