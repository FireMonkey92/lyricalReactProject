import React, { Component } from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
class SongsList extends Component {

  renderSongsList(){
    return this.props.data.songs.map(item=>{
       return(
        <div className="collection-item" key={item.id}> {item.title}</div> 
        )
      })
    }
  
  render() {
    if(this.props.data.loading){return(<div className="collection-item">Drinking Vodka..!!</div>)}
    return (
      <ul className="collection">
        {this.renderSongsList()}
      </ul>
    )
  }
}

const query = gql`{
  songs {
    id
    title
    lyrics {
      content
      likes
    }
  }
}`;

export default graphql(query)(SongsList);