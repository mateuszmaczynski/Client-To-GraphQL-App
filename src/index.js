import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
// import reportWebVitals from './reportWebVitals';
import App from './App';
import './styles.css';

const URL = "https://simple-graphql-app.herokuapp.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
