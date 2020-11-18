import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Routes/Root'

import client from "./utils/apolloClient"
import {ApolloProvider} from "@apollo/react-hooks"

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
