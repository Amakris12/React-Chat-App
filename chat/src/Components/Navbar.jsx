import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <h2>Andrew's Chat App</h2>
            <Link to='/'><p>Home</p></Link>
            <Link to='/About'><p>About</p></Link>
            <Link to='/Contact'><p>Contact</p></Link>
            <Link to='/Create'><p>Login</p></Link>
        </nav>
    )
}

export default Navbar
