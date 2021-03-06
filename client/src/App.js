import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Launches from "./components/Launches";
import Launch from "./components/Launch";

import "./App.css";
import spacex from "./spacex.png";


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">
        <img
          src={spacex}
          alt="Spacex"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Route exect path='/' component={Launches} />
        <Route path="/launch/:flight_number" component={Launch}/>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
