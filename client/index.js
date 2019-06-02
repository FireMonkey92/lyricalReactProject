import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import {ApolloProvider} from "react-apollo";


import "./style/style.css";
// import {Router, BrowserRouter, Link} from 'react-router';
// Components
import SongsList from './components/SongsList'

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
          <SongsList/>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));