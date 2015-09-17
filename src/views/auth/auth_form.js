import React from 'react'
import SignIn from './sign_in.js'
import SignUp from './sign_up.js'
import { Link } from 'react-router'


export default class AuthForm extends React.Component {
    render() {
        return (
            <div className=" ui raised very padded text container segment">
                <div className="ui two column middle aligned very relaxed stackable grid">
                    <div className="column"><SignIn/></div>
                    <div className="ui vertical divider">Or</div>
                    <div className="column"><SignUp/></div>
                </div>
            </div>
        )
    }
}

