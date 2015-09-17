import React from 'react'
import { Link } from 'react-router'


export default class AuthForm extends React.Component {
    render() {
        return (
            <div className=" ui raised very padded text container segment">
                <div className="ui two column middle aligned very relaxed stackable grid">
                    <div className="column">
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
                    </div>

                    <div className="ui vertical divider">
                        Or
                    </div>

                    <div className="column">
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
                    </div>
                </div>
            </div>
        )
    }
}

