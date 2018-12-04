import React from 'react';
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
        console.log(auth);
        const links = auth.uid ?  <SigninLink /> : <SignoutLink />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="logo">Project Plan</Link>
               {links}
                
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    
    return {
        auth:state.firebase.auth
    } 
}
export default connect(mapStateToProps)(Navbar);