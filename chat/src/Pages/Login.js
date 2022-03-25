import React from 'react'
import {Link} from 'react-router-dom'



const Login = () => {
    return (
        <div class="flexbox">
        <div class="content">
            <div id="login" class="box show">
            <div class="field">
                <div class="sign-in">Sign In<br/><small>Login to continue</small></div>
            </div>
            <div class="field">
                <label>Username</label>
                <input type="text"/>
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password"/>
            </div>
            <div class="field">
                <Link to="/register"><a href="#" id="account" class="trouble">Doesn't have an account yet?</a></Link>
                
            </div>
            <div class="field">
                <button class="btn-sign-in">Sign In</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Login
