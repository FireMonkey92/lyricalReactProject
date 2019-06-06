import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
// CSS
import "./style/style.css"
// components
import App from './components/App';
import createSong from "./components/createSong";
import SongsList from './components/SongsList'

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongsList}></IndexRoute>
          <Route path='songs/new' component={createSong} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));