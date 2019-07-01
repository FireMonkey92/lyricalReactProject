import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
class createLyrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyricsContent: ""
        }
    }
    handleOnSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                songId: this.props.songId,
                content: this.state.lyricsContent
            }
        }).then(() => {
        });
        this.setState({
            lyricsContent: ""
        });
    }

    render() {
        return (
            <div className="addLyricsBlock">
                <form onSubmit={this.handleOnSubmit.bind(this)} >
                    <label htmlFor=""> Create New Lyric : </label>
                    <input placeholder="Enter lyrics here and press Enter to submit.." style={{ fontSize: "25px" }} type="text" value={this.state.lyricsContent} onChange={e => this.setState({ lyricsContent: e.target.value })} />
                </form>
            </div>
        )
    }
}

const mutation = gql`
mutation addlyricstoSong($songId: ID! $content: String! ){
    addLyricToSong (songId :$songId content:$content  ){
      id
      title
    lyrics {
      id
      content
      likes
    }
    }
  }
`;

export default graphql(mutation)(createLyrics);
