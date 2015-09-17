import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
    render() {
        return (
            <div className="ui menu">
            <span>
                <Link to="/">
                    <h1 className="ui header">Kick Me!
                        <small className="ui sub header">New Project Notifications for Kickstater</small>
                    </h1>
                </Link>
            </span>

                <div className="right menu">
                <span className="item">
                    <Link to="/auth">Sign in | Sign up</Link>
                </span>
                </div>
            </div>
        )
    }
}



