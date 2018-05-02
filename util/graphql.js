import fetch from 'isomorphic-fetch';
import { HttpLink } from 'apollo-link-http'; 
import ApolloClient from 'apollo-boost';
// import { Lokka } from 'lokka';
// import { Transport } from 'lokka-transport-http';

const PORT_STRAPI = 1337;
var origin = 'http://localhost:' + PORT_STRAPI;

if (typeof window === 'object') {
    origin = window.location.origin;
}

var api = origin + '/graphql';

// const client = new Lokka({
//   transport: new Transport(api)
// });

const customFetch = (uri, options) => {
  return fetch(uri, options);
};

const link = new HttpLink({ fetch: customFetch });
const client = new ApolloClient({
    uri: api, 
    link
});

export default client;