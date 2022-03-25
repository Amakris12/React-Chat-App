import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-text">
                <h2 className="login-title">Login or Sign-up Here !</h2>
                <hr className="line2" />
                <div className="login-buttons">
                    <Link to="/login"><button className="btn-login">Login</button></Link>
                    <Link to="/register"><button className="btn-register">Register</button></Link>
                    
                </div>
                <p className="login-message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque distinctio voluptatum eaque tempore? Tempore ipsa debitis delectus, illo temporibus, inventore a numquam commodi voluptates laboriosam corporis! Consectetur accusantium eius quae laboriosam, unde impedit, molestias quod vel mollitia tenetur facilis eum repellat ut a quibusdam molestiae? Doloribus unde repellat illo itaque.</p>
            </div>
            <div className="login-img-container">
                <img className="login-img" src="https://i.ytimg.com/vi/k3ftlbnbwuc/maxresdefault.jpg" alt="" />
            </div>
        </div>
    )
}

export default Login
