import React from 'react'
import Header from './shared/header.js'

export default class Main extends React.Component {
    render() {
        return (
        <div className="content">
            <Header/>

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



