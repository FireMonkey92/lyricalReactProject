import React, { Component } from 'react'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricsListRander extends Component {

    onLikeClick(id){
        this.props.mutate({
            variables : {id}
        })
    }
    onDeleteClick(id){
        this.props.mutate({variables : {id}});
    }
    renderSongsLyrics({ lyrics }) {
        return lyrics.map((item) => {
            return (
                <div key={item.id} className="collection-item flex-list" >
                    <div className="s-title">
                        <span>{item.content}</span>
                    </div>
                    <div className="v-box" style={{ textAlign: "right" }}>
                       
                        <i onClick={()=>this.onLikeClick(item.id)} style={{ cursor: "pointer" }} className="material-icons">thumb_up_alt</i>
                        {/* <i onClick={()=>this.onDeleteClick(item.id)} style={{ cursor: "pointer" }} className="material-icons">delete_forever</i> */}
                        <span className="op-item" style={{ marginRight: "5px" }}> {item.likes} </span>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.props.lyrics.length === 0) { return (<div className="Warning"><i style={{fontSizez: 50}} className="material-icons">warning</i><h5>There is no lyrics added for this song, Please add one..!!</h5></div>) }
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

const mutation = gql`
mutation likeSongLyric($id : ID!){
    likeLyric(id : $id){
        id
      likes
    }
}`;

const editMutation= gql`mutation editLyric($id : ID!){
    editLyric(id : $id){
          id
        likes
      }
    }`;

export default  graphql(mutation)(LyricsListRander);
