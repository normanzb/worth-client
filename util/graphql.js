import { HttpLink } from 'apollo-link-http'; 
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import fetch from 'isomorphic-fetch';

import loginState from './loginState';
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

const link = new HttpLink({ 
    uri: api, 
    fetch: customFetch 
});

const authLink = setContext((_, { headers }) => {
    const token = loginState.jwt;
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        }
    };
});

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            }
            if (networkError) {
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        authLink.concat(link)
    ]),
    cache: new InMemoryCache()
});

export default client;