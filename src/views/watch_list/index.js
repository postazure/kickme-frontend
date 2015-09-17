import React from 'react'
import AddNewCreators from './add.js'

export default class WatchList extends React.Component {
    getProjectCreators() {
        // get project creators from api
        return [
            { name: 'CoolMiniOrNot', bio: 'bar bar bar foo', avatar: 'https://ksr-ugc.imgix.net/avatars/2326978/cmonlogo250.original.jpg?v=1393237255&w=80&h=80&fit=crop&auto=format&q=92&s=0c4874ba952f7b79025eb92d297c85d9' }
        ]
    }

    renderProjectCreators() {
        let creatorsList = this.getProjectCreators().map(function(creator) {
            return(
                <div className="item">
                    <img className="ui avatar image" src={creator.avatar} />
                    <div className="content">
                        <a className="header">{creator.name}</a>
                        <div className="description">{creator.bio}</div>
                    </div>
                </div>
            )
        });
        return(
            <div className="ui list">
                {creatorsList}
            </div>
        );
    }

    render() {
        return (
            <div className="ui raised very padded container segment">
                <AddNewCreators />
                <h3 className="ui header">
                    You're Watching
                </h3>

                {this.renderProjectCreators()}
            </div>
        )
    }
}

