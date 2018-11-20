import React from 'react';
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'
const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="logo">Project Plan</Link>
                <SigninLink />
                <SignoutLink />
            </div>
        </nav>

    )
}

export default Navbar;