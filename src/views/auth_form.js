import React from 'react'

export default class AuthForm extends React.Component {
    render() {
        return (
            <div className=" ui raised very padded text container segment">
                <div className="ui two column middle aligned very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
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
                            <div className="ui blue submit button">Login</div>
                        </div>
                    </div>

                    <div className="ui vertical divider">
                        Or
                    </div>

                    <div className="center aligned column">
                        <div className="ui big green labeled icon button">
                            <i className="signup icon"></i>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

