import React from 'react'
import { Link } from 'react-router'


export default class SignUp extends React.Component {
    render() {
        return (
            <div className="ui form">
                <h1>Sign Up</h1>
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
                <div className="field">
                    <label>Password Confirmation</label>
                    <div className="ui left icon input">
                        <input type="password" placeholder="Password Confirmation" autoComplete="off" />
                        <i className="lock icon"></i>
                    </div>
                </div>
                <Link to="/watchlist">
                    <div className="ui green submit button">Sign Up</div>
                </Link>
            </div>
        )
    }
}

