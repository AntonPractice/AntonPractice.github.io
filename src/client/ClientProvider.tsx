import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, split, HttpLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export type ClientProps = {
  children: React.ReactNode;
};

const httpLink = createHttpLink({
  uri: 'https://cea3c11a3f62.vps.myjino.ru/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const protectedMode = localStorage.getItem('protectedMode');
  return {
    headers: {
      ...headers,
      authorization: token && protectedMode ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export const ClientProvider: FC<ClientProps> = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
