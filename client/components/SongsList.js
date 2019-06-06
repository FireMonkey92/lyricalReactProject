import React, { Component } from 'react'
import { Link } from 'react-router';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
// queries
import query from '../queries/fetchSongs';
// import deleteQuery from '../queries/deleteSong';
class SongsList extends Component {
  handleDeleteSong(e, id) {
    console.log(e, id)
    // this.props.mutate({
    //     variables: {
    //         id: id
    //     },
    //     refetchQueries: [{ query }]
    // })
  }
  renderSongsList() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item"> {song.title}
          <div className="list-operation">
            <span className="op-item">
              <i className="material-icons">edit</i>
            </span>
            <span className="op-item">
              <i className="material-icons">delete_forever</i>
            </span>
          </div>
        </li>
      )
    })
  }
  render() {
    if (this.props.data.loading) { return (<div>Loading...!!</div>) }
    return (
      <div>
        <ul className="collection" >
          {this.renderSongsList()}
        </ul>
        <Link to='/songs/new' className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}
export default graphql(query)(SongsList);
