import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// queries
import getSong from '../queries/fetchSong'

// Components
import LoadingAnimation from './LoadingAnimation'
import CreateLyrics from './createLyrics';
import LysricsList from './LyricsListRander';


class SongDetails extends Component {


    render() {
        const song = this.props.data.song;
        if (this.props.data.loading) { return (<LoadingAnimation />) }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <Link to="/" className="btn-floating btn-large black" style={{ marginTop: "5px" }}>
                        <i className="material-icons">keyboard_backspace</i>
                    </Link>
                    <div style={{ marginLeft: '20px' }}>
                        Title:<h5>{song.title}</h5>
                    </div>

                </div>


                {/* list of lyrics */}
                <LysricsList title={song.title} lyrics={song.lyrics} />
                <br />
                <CreateLyrics songId={this.props.params.id} />
            </div>
        )
    }
}

export default graphql(getSong, {
    options: (props) => {
        return {
            variables: {
                id: props.params.id
            }
        }
    }
})(SongDetails);
