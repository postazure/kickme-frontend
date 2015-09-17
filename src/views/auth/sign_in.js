import React from 'react'
import {Router} from 'react-router'


export default class SignIn extends React.Component {
    signInUser(e) {
        e.preventDefault();
        console.log( "User Signed In - sort of" );
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.signInUser.bind(this)}>
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

                <input type='submit' value="Sign In" className="ui blue submit button"/>

            </form>
        )
    }
}