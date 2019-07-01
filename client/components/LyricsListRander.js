import React, { Component } from 'react'

export default class LyricsListRander extends Component {
    renderSongsLyrics({ lyrics }) {
        return lyrics.map((item) => {
            return (
                <div key={item.id} className="collection-item flex-list" >
                    <div className="s-title">
                        <span>{item.content}</span>
                    </div>
                    <div className="list-operation" style={{ textAlign: "right" }}>
                        <span className="op-item" style={{ marginRight: "5px" }}> {item.likes} </span>
                        <i style={{ cursor: "pointer" }} className="material-icons">thumb_up_alt</i>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.props.lyrics.length === 0) { return (<h5>There is no lyrics added for this song, Please add one..!!</h5>) }
        return (
            <div>
                <div style={{ marginLeft: '5px' }}>Lyrics for {this.props.title}</div>
                <div className="collection">
                    {this.renderSongsLyrics(this.props)}
                </div>
            </div>
        )
    }
}
