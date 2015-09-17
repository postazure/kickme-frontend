import React from 'react'
import { Link } from 'react-router'

export default class Main extends React.Component {
    render() {
        return (
        <div className="content">
            <div className="ui menu">
                <span>
                    <h1 className="ui header">Kick Me!
                        <small className="ui sub header">New Project Notifications for Kickstater</small>
                    </h1>
                </span>

                <div className="right menu">
                    <span className="item">
                        <Link to="/auth">Auth</Link>
                    </span>
                </div>
            </div>

            <div className="body">
                <div id="main_header"></div>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }
}



