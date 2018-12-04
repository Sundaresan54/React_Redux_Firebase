import React from 'react';
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth, userProfile } = props;
        console.log(userProfile,"heelooo");
        const links = auth.uid ?  <SigninLink   profile = {userProfile}/> : <SignoutLink />
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
        auth:state.firebase.auth,
        userProfile:state.firebase.profile
    } 
}
export default connect(mapStateToProps,null)(Navbar);