import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Routes/Root'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './utils/ApolloClient'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
