import React from 'react'
import { Link } from 'react-router'


export default class SignIn extends React.Component {
    render() {
        return (
            <div className="ui form">
                <h1>Sign In</h1>
                <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                        <input type="text" placeholder="Username" autoComplete="off" />
                        <i className="user icon"></i>
                    </div>
                </div>

                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <input type="password" placeholder="Password" autoComplete="off" />
                        <i className="lock icon"></i>
                    </div>
                </div>
                <Link to="/watchlist">
                    <div className="ui blue submit button">Sign In</div>
                </Link>
            </div>
        )
    }
}

