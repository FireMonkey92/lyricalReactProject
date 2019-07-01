import React, { Component } from 'react'
import { Link } from 'react-router';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
// queries
import query from '../queries/fetchSongs';

//components
import LoadingAnimation from './LoadingAnimation'


class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: "",
      enableEdit: false
    }
  }
  handleOnSubmitQuery(e, id) {
    e.preventyDefault();
    console.log(e, id)
    // console.log(this.state.songTitle)
  }
  handleTextChangeInput(e) {
    this.setState({ songTitle: e.target.value })
  }
  handleEditSong(e, id) {
    this.setState({ enableEdit: true, songTitle: e.target.value })
  }
  handleDeleteSong(id) {
    this.props.mutate(
      {
        variables: { id: id }
      }
    ).then(() => this.props.data.refetch())
      .catch(e => console.log(e));
  }
  renderSongsList() {
    if (this.props.data.songs) {
      return this.props.data.songs.map(({ id, title }) => {
        return (
          <li key={id} className="collection-item flex-list" >
            <Link to={`/song/${id}`}>
              <div className="s-title">
                <i className="material-icons">queue_music</i>
                <span >{title}</span>
                {/* <form className={this.state.enableEdit ? '' : " display-none"} onSubmit={(e) => this.handleOnSubmitQuery(e, id)}>
              <label htmlFor=""> Edit Title : </label>
              <input type="text" value={this.state.songTitle} onChange={e => this.handleTextChangeInput(e)} />
            </form> */}
              </div>
            </Link>
            <div className="list-operation">
              <span className="op-item">
                <i className="material-icons" onClick={(e) => this.handleEditSong(e, id)}>edit</i>
              </span>
              <span className="op-item">
                <i className="material-icons" onClick={() => this.handleDeleteSong(id)} >delete_forever</i>
              </span>
            </div>
          </li>
        )
      })
    }
  }
  render() {
    if (this.props.data.loading) { return (<LoadingAnimation />) }
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
const mutation = gql`
  mutation DeleteSong($id: ID) {
          deleteSong(id: $id) {
          id
        }
    }
`;
export default graphql(mutation)(graphql(query)(SongsList));
