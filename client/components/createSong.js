import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import query from '../queries/fetchSongs';

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: ''
        }
    }
    handleTextChangeInput(e) {
        this.setState({
            songTitle: e.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.songTitle
            },
            refetchQueries: [{ query }]
        }).then(() => {
            hashHistory.push('/');
        })
    }
    render() {
        return (
            <div>
                <Link to="/" className="btn-floating btn-large black" style={{ marginTop: "5px" }}>
                    <i className="material-icons">keyboard_backspace</i>
                </Link>
                <h4> Create A New Song..!!</h4>

                <form onSubmit={this.handleOnSubmit.bind(this)} >
                    <label htmlFor=""> Song Title : </label>
                    <input style={{ fontSize: "25px" }} type="text" value={this.state.songTitle} onChange={e => this.handleTextChangeInput(e)} />
                </form>
            </div >
        )
    }
}

const mutation = gql`
mutation AddSong($title :  String){
    addSong(title : $title){
        title
    }
}
`;

export default graphql(mutation)(CreateSong);
