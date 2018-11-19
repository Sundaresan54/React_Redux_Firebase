import React from 'react';
import { NavLink } from 'react-router-dom';

const SigninLink = () => {
    return (
        <ul className="right">
        <li><NavLink to = '/createproject' >New Project</NavLink> </li>
        <li><NavLink to = '/' >Log out</NavLink> </li>
        <li><NavLink to = '/' className='btn btn-floating green lighten-1 '>SP</NavLink> </li>
        </ul>
    )
}

export default SigninLink;